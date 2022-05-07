import express from "express"
import getParty from "../CONTROLLERS/getParty.js"

const Router = express.Router

const partyRouter = Router()

partyRouter.get('/', getParty)


export default partyRouter