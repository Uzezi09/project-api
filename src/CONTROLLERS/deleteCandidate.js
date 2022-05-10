import { candidates } from "../database.js"

const deleteCandidate = (req, res) => {
  const id = parseInt(req.params.id)

  for (let i=0; i < candidates.length; i++) {
    const data = candidates[i]
    if (data.id === id) {
      candidates.splice(i, 1);

      return res.json({  
        status: 200,
        data: 'candidate Deleted',
      });
    
    }
  }  
  return res.json({
    status: 400,
    error: 'candidate not found'
  });

}

export default deleteCandidate