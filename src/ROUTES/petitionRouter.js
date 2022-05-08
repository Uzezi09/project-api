import express from "express"
import getAllPetition from "../CONTROLLERS/getAllPetition.js"
import getPetition from "../CONTROLLERS/getPetition.js"
import deletePetition from "../CONTROLLERS/deletePetition.js"
import addPetition from "../CONTROLLERS/addPetition.js"
import updatePetition from "../CONTROLLERS/updatePetition.js"


const Router = express.Router

const petitionRouter = Router()

petitionRouter.get('/', getAllPetition)

petitionRouter.get('/:id', getPetition)

petitionRouter.delete('/:id', deletePetition)

petitionRouter.post('/', addPetition)

petitionRouter.put('/:id', updatePetition)


export default petitionRouter