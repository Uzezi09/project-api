import { candidates } from "../database.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs"
import generateToken from "../utils/generateToken.js";


const addCandidate = async (req, res) => {
  const obj = req.body;
  // const file = req.file;

  const check = candidates.find(candidate => candidate.candidate === obj.candidate);

  if (!(obj.office)) {
    res.status(400).json({
      status:400,
      error: "Invalid office name",
    });
    return;
  } 

  if (!(obj.candidate)) {
    res.status(400).json({
      status: 400,
      error: "Invalid Candidate name",
    });
    return;
  } 

  if (!(obj.party)) {
    res.status(400).json({
      status: 400,
      error: "Invalid party",
    });
    return;
  } 

  // if (!file) {
  //   res.status(400).json({
  //     status: 400,
  //     error: "file is compulsory",
  //   });
  //   return;
  // } 

  if (check) {
    res.status(400).json({
      status: 400,
      error: "candidate party already exist",
    });
    return;
  }

  // let logoUrl;
  // const path = file.path;
  // const uniqueFileName = `${file.originalname}${Date.now()}`;

  // await cloudinary.uploader.upload(
  //   path,
  //   {
  //     public_id: `politico/${uniqueFileName}`,
  //     tags: "politico", 
  //   },
  //   (err, image) => {
  //     if(err) {
  //        return res.status(400).json({
  //         status: 400,
  //         error: {
  //           file: err.message
  //         }
  //       })
  //     }
   
  //     fs.unlinkSync(path);
  //     logoUrl = image.secure_url
  //   }
  // )

  const newCandidate = {
    id: candidates.length,
    office: obj.office,
    party: obj.party,
    candidate: obj.candidate,
    // logoUrl: logoUrl
  };

  candidates.push(newCandidate); 

  res.json({ 
    status: 200,
    data: {
      ...newCandidate,
      token: generateToken(newCandidate)
    }
  });
}

export default addCandidate