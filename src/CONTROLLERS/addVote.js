import { votes } from "../database.js";
// import cloudinary from "../config/cloudinary.js";
// import fs from "fs"

const addVote = async (req, res) => {
  const obj = req.body;  
  // const file = req.file;
  // const authUser = req.body

  const check = votes.find((vote) => vote.createdBy === req.user.id && vote.office === obj.office);

  if (!(obj.candidate)) {
    res.status(400).json({
      status: 400,
      error: "candidate vote id is compulsory",
    });
    return;
  }

  if (!(obj.office)) {
    res.status(400).json({
      status: 400,
      error: "candidate vote office is compulsory",
    });
    return;
  }    

  if (check) {
    res.status(400).json({
      status: 400,
      msg: 'you can only vote once for an office'
    })

    return;
  }

  if (!obj.logoUrl) {
    res.status(400).json({
      status: 400,
      error: "file is compulsory",
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

  const newVote = {
    "id": votes.length,
    "createdOn": Date.now(),
    "createdBy": req.user.id,
    "office": parseInt(obj.office),
    "candidate": parseInt(obj.candidate),
    'logoUrl': obj.logoUrl
  }

  votes.push(newVote);

  res.json({
    status: 200,
    data: {
      ...newVote
    }
  })
}

export default addVote