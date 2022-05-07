import express from "express"
import getAllOffice from "../CONTROLLERS/getAllOffice.js"
import addOffice from "../CONTROLLERS/addOffice.js"
import getOffice from "../CONTROLLERS/getOffice.js"
import updateOffice from "../CONTROLLERS/updateOffice.js"
import deleteOffice from "../CONTROLLERS/deleteOffice.js"


const Router = express.Router

const officeRouter = Router()

officeRouter.get('/', getAllOffice)

officeRouter.post('/', addOffice)

officeRouter.get('/:id', getOffice)

officeRouter.put('/:id', updateOffice)

officeRouter.delete('/:id', deleteOffice)


export default officeRouter