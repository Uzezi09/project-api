import { votes } from "../database.js";

const getAllVote = (req, res) => {
  res.json(votes)
}

export default getAllVote