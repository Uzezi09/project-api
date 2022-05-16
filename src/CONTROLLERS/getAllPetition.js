import { petitions } from "../database.js";

const getAllPetition = (req, res) => {
  res.json({
    status: 200,
    data: petitions
  })
}

export default getAllPetition