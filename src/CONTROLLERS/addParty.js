import { party } from "../database.js"
import cloudinary from "../config/cloudinary.js";
import fs from "fs"
import generateToken from "../utils/generateToken.js";

const addParty = async(req, res) => {
  const addPartyObj = req.body;
  const file = req.file;

  const check = party.find(parte => parte.name === addPartyObj.name);

  if (!addPartyObj.hqaddress) {
    res.status(400).json({
      status: 400,
      error: "Party headquarters address is compulsory",
    });
    return;
  }

  if (!addPartyObj.name) {
    res.status(400).json({
      status:400,
      error: "Party name is compulsory",
    });
    return;
  }

  if (check) {
    res.json({
      status: 400,
      error: 'Party name already exist'
    });

    return;
  }

  
  if (!file) {
    res.status(400).json({
      status: 400,
      error: "file is compulsory",
    });
    return;
  }

  let logoUrl;
  const path = file.path;
  const uniqueFileName = `${file.originalname}${Date.now()}`;

  await cloudinary.uploader.upload(
    path,
    {
      public_id: `politico/${uniqueFileName}`,
      tags: "politico",
    },
    (err, image) => {
      if(err) {
         return res.status(400).json({
          status: 400,
          error: {
            file: err.message
          }
        })
      }
   
      fs.unlinkSync(path);
      logoUrl = image.secure_url
    }
  )

  const newParty = {
    id: party.length,
    name: addPartyObj.name,
    hqaddress: addPartyObj.hqaddress,
    logoUrl: logoUrl,
  }
  
  party.push(newParty);
  
  res.json({
    status: 200,
    data: {
      ...newParty,
      token: generateToken(newParty)
    }
  });

}

export default addParty