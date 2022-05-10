import express from "express"
import mongoose from "mongoose"
import addUsers from "../CONTROLLERS/addUsers.js"
import deleteUsers from "../CONTROLLERS/deleteUsers.js"
import getUsers from "../CONTROLLERS/getUsers.js"
import updateUsers from "../CONTROLLERS/updateUsers.js"
import getAllUsers from "../CONTROLLERS/getAllUser.js"
import loginUser from "../CONTROLLERS/loginUser.js"

const Router = express.Router

const userRouter = Router()

// const userSchema = new mongoose.Schema({

// })

userRouter.get('/:id', getUsers)

userRouter.get('/', getAllUsers)

userRouter.post('/', addUsers)

userRouter.put('/:id', updateUsers)

userRouter.delete('/:id', deleteUsers)

userRouter.post('/login', loginUser)

export default userRouter