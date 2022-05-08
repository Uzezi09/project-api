import { candidates } from "../database.js";

const getCandidate = (req, res) => {
  let id = parseInt(req.params.id);
  
  const check = candidates.find(candidate => candidate.id === id);
  
  if (check) {
    res.json(candidates.find(candidate => candidate.id === id));
  
    return;
  }
  
  if (!check) {
    res.status(400).json({ msg: 'Candidate id not found' });
  
    return;
  }
}

export default getCandidate