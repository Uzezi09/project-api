import { petitions } from "../database.js"

const deletePetition = (req, res) => {
  const id = parseInt(req.params.id)

  for (let i=0; i < petitions.length; i++) {
    const data = petitions[i]
    if (data.id === id) {
      petitions.splice(i, 1);

      return res.json({  
        status: 200,
        data: 'petition Deleted',
      });
    
    }
  }  
  return res.json({
    status: 400,
    error: 'candidate not found'
  });

}

export default deletePetition