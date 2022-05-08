import { candidates } from "../database.js";

const addCandidate = (req, res) => {
  const obj = req.body;

  const check = candidates.find(candidate => candidate.party === parseInt(obj.party));

  if (!parseInt(obj.office)) {
    res.status(400).json({
      message: "Invalid Candidate office ID",
    });
    return;
  } 

  if (!parseInt(obj.candidate)) {
    res.status(400).json({
      message: "Invalid Candidate ID",
    });
    return;
  } 

  if (!(parseInt(obj.party))) {
    res.status(400).json({
      message: "Invalid Candidate party",
    });
    return;
  } 

  if (check) {
    res.status(400).json({
      message: "candidate party already exist",
    });
    return;
  }

  const newCandidate = {
    id: candidates.length,
    office: obj.office,
    party: obj.party,
    candidates: obj.candidate,
  };

  candidates.push(newCandidate);

  res.json(candidates);
}

export default addCandidate