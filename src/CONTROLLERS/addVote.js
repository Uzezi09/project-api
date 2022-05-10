import { votes } from "../database.js";
import generateToken from "../utils/generateToken.js";

const addVote = (req, res) => {
  const obj = req.body;

  const check = votes.find((vote) => vote.candidate === parseInt(obj.candidate));

  if (!parseInt(obj.candidate)) {
    res.status(400).json({
      status: 400,
      error: "candidate vote id is compulsory",
    });
    return;
  }

  if (!parseInt(obj.office)) {
    res.status(400).json({
      status: 400,
      error: "candidate vote office is compulsory",
    });
    return;
  }

  if (!parseInt(obj.createdBy)) {
    res.status(400).json({
      status: 400,
      error: "createdBy is compulsory",
    });
    return;
  }

  if (check) {
    res.status(400).json({
      status: 400,
      error:'Candidate id alredy exist' });
    return;
  }

  const newVote = {
    "id": votes.length,
    "createdOn": Date.now(),
    "createdBy": obj.createdBy,
    "office": obj.office,
    "candidate": obj.candidate,
  }

  votes.push(newVote);

  res.json({
    status: 200,
    data: {
      ...newVote,
      token: generateToken(newVote)
    }
  })
}

export default addVote