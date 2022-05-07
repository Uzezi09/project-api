import {party} from "../database.js"

const updateParty = (req, res) => {
  let id = parseInt(req.params.id)

  const check = party.find(parte => parte.id === id)
 
  if (check) {
    const updatePartyObj = req.body;
    
    party.forEach(parte => {
      if (parte.id === id) {
        parte.hqAddress = updatePartyObj.hqAddress ? updatePartyObj.hqAddress : parte.hqAddress;
        parte.name = updatePartyObj.name ? updatePartyObj.name : parte.name;

        res.json({msg: 'Party details updated', party})
      }
    });
  }

  if (!check) {
    res.status(400).json({msg: 'Party not found'})
  }

}


export default updateParty