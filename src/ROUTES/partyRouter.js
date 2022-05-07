import express from "express"
import getAllParty from "../CONTROLLERS/getAllParty.js"
import getParty from "../CONTROLLERS/getParty.js"
import addParty from "../CONTROLLERS/addParty.js"
import deleteParty from "../CONTROLLERS/deleteParty.js"
import updateParty from "../CONTROLLERS/updateParty.js"


const Router = express.Router

const partyRouter = Router()

partyRouter.get('/', getAllParty)

partyRouter.get('/:id', getParty)

partyRouter.post('/', addParty)

partyRouter.delete('/:id', deleteParty)

partyRouter.put('/:id', updateParty)


export default partyRouter