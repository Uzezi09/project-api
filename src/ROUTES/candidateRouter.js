import express from "express"
import getAllCandidate from "../CONTROLLERS/getAllCandidate.js"
import getCandidate from "../CONTROLLERS/getCandidate.js"
import addCandidate from "../CONTROLLERS/addCandidate.js"
import updateCandidate from "../CONTROLLERS/updateCandidate.js"
import deleteCandidate from "../CONTROLLERS/deleteCandidate.js"

const Router = express.Router

const candidateRouter = Router()

candidateRouter.get('/', getAllCandidate)

candidateRouter.get('/:id', getCandidate)

candidateRouter.post('/', addCandidate)

candidateRouter.put('/:id', updateCandidate)

candidateRouter.delete('/:id', deleteCandidate)

export default candidateRouter