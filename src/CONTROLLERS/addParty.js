import { party } from "../database.js"
import cloudinary from "../config/cloudinary.js";
import fs from "fs"

const addParty = async(req, res) => {
  const {name, hqAddress, id} = req.body;
  const file = req.file;

  const check = party.find(parte => parte.id === id);


  if (!name) {
    res.status(400).json({
      status:400,
      error: "Party name is compulsory",
    });
    return;
  }

  if (!hqAddress) {
    res.status(400).json({
      status: 400,
      error: "Party headquarters address is compulsory",
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
    name: name,
    hqAddress: hqAddress,
    logoUrl: logoUrl,
  }
  
  party.push(newParty);
  
  res.json({
    status: 200,
    data: {
      ...newParty,
    }
  });

}

export default addParty