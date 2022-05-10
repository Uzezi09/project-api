import { users } from "../database.js"; 
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt"
import fs from "fs"
import generateToken from "../utils/generateToken.js";

const addUsers = async (req, res) => {
  const obj = req.body;
  const file = req.file;

  const check = users.find((user) => user.email === obj.email);

  if (!obj.firstname) {
    res.status(400).json({
      status: 400,
      error: "firstname is compulsory",
    });
    return;
  } 

  if (!obj.lastname) {
    res.status(400).json({
      status: 400,
      error: "lastname is compulsory",
    });
    return;
  } 

  if (!obj.email) {
    res.status(400).json({
      status: 400,
      error: "email is compulsory",
    });
    return;
  } 

  if (!obj.phoneNumber) {
    res.status(400).json({
      status: 400,
      error: "phonenumber is compulsory",
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
      status: 400,
      error: "Email already exist",
    });
    return;
  }

  const newPassword = bcrypt.hashSync(obj.password, 12)

  let passportUrl;
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
      passportUrl = image.secure_url
    }
  )

  const newData = {
    id: users.length,
    firstname: obj.firstname,
    lastname: obj.lastname,
    othername: obj.othername,
    phoneNumber: obj.phoneNumber,
    email: obj.email,
    password: newPassword,
    passportUrl: passportUrl,
    role: obj.role,
    isAdmin: false
  };

  users.push(newData);

  res.json({
  status: 200,
  data:{
  ...newData,
  token: generateToken(newData)
    } 
  });  
}

export default addUsers