import { candidates } from "../database.js";

const getAllCandidate = (req, res) => {
  res.json({
    status: 200,
    data: candidates
  });
}

export default getAllCandidate