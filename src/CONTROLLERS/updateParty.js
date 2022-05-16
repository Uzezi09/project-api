import {party} from "../database.js"
// import fs from "fs"
// import cloudinary from "cloudinary"

const updateParty = (req, res) => {
  let id = parseInt(req.params.id)

  const check = party.find(parte => parte.id === id)
 
  if (check) {
    const updatePartyObj = req.body;
    
    party.forEach(parte => {
      if (parte.id === id) {
        parte.name = updatePartyObj.name ? updatePartyObj.name : parte.name;
        parte.hqAddress = updatePartyObj.hqAddress ? updatePartyObj.hqAddress : parte.hqAddress;

        res.json({
          status: 200,
          data: {
            msg: 'Party details updated', party:party.find(parte => parte.id === id)
          }
        })
      } 
    });
  }

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Party not found'
    })
  }

} 


export default updateParty