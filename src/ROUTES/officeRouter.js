import express from "express"
import getAllOffice from "../CONTROLLERS/getAllOffice.js"


const Router = express.Router

const officeRouter = Router()

officeRouter.get('/', getAllOffice)

export default officeRouter