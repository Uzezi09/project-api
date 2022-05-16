import { offices } from "../database.js"

const getAllOffice = (req, res) => {
  res.json({
    status: 200,
    data: offices
  })
}

export default getAllOffice