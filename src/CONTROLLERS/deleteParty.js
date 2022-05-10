import { party } from "../database.js"

const deleteParty = (req, res) => {
  const id = parseInt(req.params.id)

  for (let i=0; i < party.length; i++) {
    const data = party[i]
    if (data.id === id) {
      party.splice(i, 1);

      return res.json({  
        status: 200,
        data: 'party Deleted',
      });
    
    }
  }  
  return res.json({
    status: 400,
    error: 'party not found'
  });

}

export default deleteParty