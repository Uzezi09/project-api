import { candidates } from "../database.js";

const getAllCandidate = (req, res) => {
  res.json(candidates);
}

export default getAllCandidate