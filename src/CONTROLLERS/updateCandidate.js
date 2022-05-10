import { candidates } from "../database.js";

const updateCandidate = (req, res) => {
  let id = parseInt(req.params.id)
 

  const check = candidates.find(candidate => candidate.id === id)
 
  if (check) {
    const updateCandidateObj = req.body;
    
    candidates.forEach(candidate => {
      if (candidate.id === id) {
        candidate.office = parseInt(updateCandidateObj.office )? parseInt(updateCandidateObj.office) : candidate.office;

        candidate.party = parseInt(updateCandidateObj.party) ? parseInt(updateCandidateObj.party) : candidate.party;

        candidate.candidate = parseInt(updateCandidateObj.candidate) ? parseInt(updateCandidateObj.candidate) : candidate.candidate;

        res.json({
          status: 200,
          data: {
            msg: 'candidate details updated', candidate
          }
        })
        
        return;
      }
    }); 
  }

  if (!check) {
    res.status(400).json({ msg: 'candidate id not found' })
    
    return;
  }

}

export default updateCandidate