import { petitions } from "../database.js";

const getAllPetition = (req, res) => {
  res.json(petitions)
}

export default getAllPetition