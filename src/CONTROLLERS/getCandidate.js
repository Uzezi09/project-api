import { candidates } from "../database.js";

const getCandidate = (req, res) => {
  let id = parseInt(req.params.id);
  
  const check = candidates.find(candidate => candidate.id === id);
  
  if (check) {
    res.json({
      status: 200,
      data: [candidates.find(candidate => candidate.id === id)]
    });
  
    return;
  }
   
  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Candidate id not found'
    });
  
    return;
  }
}

export default getCandidate