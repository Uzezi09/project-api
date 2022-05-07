import { offices } from "../database.js"

const getAllOffice = (req, res) => {
  res.json(offices)
}

export default getAllOffice