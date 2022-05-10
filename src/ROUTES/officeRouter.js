import express from "express"
import isAdmin from "../utils/isAdmin.js"
import getAllOffice from "../CONTROLLERS/getAllOffice.js"
import addOffice from "../CONTROLLERS/addOffice.js"
import getOffice from "../CONTROLLERS/getOffice.js"
import updateOffice from "../CONTROLLERS/updateOffice.js"
import deleteOffice from "../CONTROLLERS/deleteOffice.js"


const Router = express.Router

const officeRouter = Router()

officeRouter.get('/', getAllOffice)

officeRouter.post('/',  addOffice)

officeRouter.get('/:id', getOffice)

officeRouter.put('/:id', isAdmin, updateOffice)

officeRouter.delete('/:id', isAdmin, deleteOffice)


export default officeRouter