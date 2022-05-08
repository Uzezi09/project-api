import { votes } from "../database.js";

const getVote = (req, res) => {
  const id = parseInt(req.params.id)

  const check = votes.find((vote) => vote.id === id);


  if (check) {
    res.json(votes.filter(vote => vote.id === id));
  }

  if (!check) {
    res.status(400).json({ msg: 'Vote id not found' });
    return;
  }
}

export default getVote