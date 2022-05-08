import express from "express"
import getAllVote from "../CONTROLLERS/getAllVote.js"
import getVote from "../CONTROLLERS/getVote.js"
import addVote from "../CONTROLLERS/addVote.js"
import deleteVote from "../CONTROLLERS/deleteVote.js"
import updateVote from "../CONTROLLERS/updateVote.js"


const Router = express.Router

const voteRouter = Router()

voteRouter.get('/', getAllVote)

voteRouter.get('/:id', getVote)

voteRouter.post('/', addVote)

voteRouter.delete('/:id', deleteVote)

voteRouter.put('/:id', updateVote)



export default voteRouter