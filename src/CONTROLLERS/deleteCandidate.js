import { candidates } from "../database.js"

const deleteCandidate = (req, res) => {
  const id = parseInt(req.params.id)

  const check = candidates.find(candidate => candidate.id === id)

  if (check) {
    res.json({ msg: 'candidate Deleted', Candidate: candidates.filter(candidate => candidate.id !== id) });

    return;
  }

  if (!check) {
    res.json({ msg: 'candidate not found' });
    
    return;
  }
}

export default deleteCandidate