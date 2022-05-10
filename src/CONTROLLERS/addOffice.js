import { offices } from "../database.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"
import generateToken from "../utils/generateToken.js";

const addOffice = async (req, res) => {
  const addOfficeObj = req.body;
  const file = req.file;

  const check = offices.find(office => office.name === addOfficeObj.name)

  if (!addOfficeObj.type) {
    res.status(400).json({
      status: 400,
      error: "Office type is compulsory",
    });
    return;
  }
  
  if (!addOfficeObj.name) {
    res.status(400).json({
      status: 400,
      error: "Office name is compulsory",
    });
    return;
  }
  
  if (check) {
    res.status(400).json({
      status: 400,
      error: "Office name already exist",
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


  const newOffice = {
    id: offices.length,
    type: addOfficeObj.type,
    name: addOfficeObj.name,
    logoUrl: logoUrl
  }
  
  offices.push(newOffice);
  
  res.json({
    status: 200,
    data: {
      ...newOffice,
      token: generateToken(newOffice)
    }
  });

}


export default addOffice