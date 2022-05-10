import { petitions } from "../database.js";

const updatePetition = (req, res) => {
  let id = parseInt(req.params.id)
 

  const check = petitions.find(petition => petition.id === id)
 
  if (check) {
    const updatePetitionObj = req.body;
    
    petitions.forEach(petition => {
      if (petition.id === id) {
        petition.office = parseInt(updatePetitionObj.office )? parseInt(updatePetitionObj.office) : petition.office;

        petition.createdBy = parseInt(updatePetitionObj.createdBy) ? parseInt(updatePetitionObj.createdBy) : petition.createdBy;

        petition.body = updatePetitionObj.body ? updatePetitionObj.body : petition.body;

        res.json({
          status: 200,
          data: {
            msg:'petition details updated', petition
          }
        })
        
        return;
      }
    });
  }

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'petition id not found'
    })
    
    return;
  }
 
}

export default updatePetition