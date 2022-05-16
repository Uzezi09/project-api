import { petitions } from "../database.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"


const addPetition = async (req, res) => {
  const obj = req.body;
  const file = req.file;

  const check = petitions.find(petition => petition.createdBy === (obj.createdBy));

  if (!(obj.office)) {
    res.status(400).json({
      status: 400,
      error: "Invalid petition office ID",
    });
    return;
  } 

  if (!(obj.body)) {
    res.status(400).json({
      status: 400,
      error: "Invalid petition body",
    });
    return;
  } 

  if (!(obj.createdBy)) {
    res.status(400).json({
      status: 400,
      error: "Invalid createdBy id",
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

  if (check) {
    res.status(400).json({
      status:400,
      error: "petition id already exist",
    });
    return;
  }

  let imageUrl;
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
      imageUrl = image.secure_url
    }
  )

  const newPetition = {
    id: petitions.length,
    createdOn: Date.now(),
    createdBy: obj.createdBy,
    office: obj.office,
    body: obj.body,
    imageUrl: imageUrl

  };

  petitions.push(newPetition);

  res.json({
    status: 200,
    data: {
      ...newPetition,
    }
  });
}

export default addPetition