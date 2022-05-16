import { offices } from '../database.js'
import cloudinary from "../config/cloudinary.js";
import fs from "fs"

const addOffice = async (req, res) => {
  const Obj = req.body
  const file = req.file;

  const check = offices.find(office => office.id === Obj.id)

  if (check) {
    res.status(400).json({
      status: 400,
      error: "Office id already exist",
    });
    return;
  }

  if (Obj.type !== "federal" && Obj.type !== "state" && Obj.type !== "local government") {
    res.status(400).json({
      status: 400,
      message: "type is compulsory",
    });
    return;
  }

  if (!Obj.name) {
    res.status(400).json({
      status: 400,
      error: "Office name is compulsory",
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
    type: Obj.type,
    name: Obj.name,
    logoUrl: logoUrl
  }
  
  offices.push(newOffice);
  
  res.json({
    status: 200,
    data: {
      ...newOffice
    }
  });

}


export default addOffice