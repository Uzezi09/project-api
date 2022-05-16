import { votes } from "../database.js";

const getAllVote = (req, res) => {
  res.json({
    status: 200,
    data: votes
  })
}

export default getAllVote