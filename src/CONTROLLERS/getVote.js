import { votes } from "../database.js";

const getVote = (req, res) => {
  const id = parseInt(req.params.id)

  const check = votes.find((vote) => vote.id === id);


  if (check) {
    res.json({
      status: 200,
      data: [votes.filter(vote => vote.id === id)[0]]
    });
  }

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Vote id not found'
    });
    return;
  } 
}

export default getVote