import express from "express"
import cors from "cors"
import dotenv from "dotenv-safe"
import multer from "multer"
import isAuth from "./utils/isAuth.js"
import userRouter from "./ROUTES/userRouter.js";
import partyRouter from "./ROUTES/partyRouter.js";
import officeRouter from "./ROUTES/officeRouter.js";
import candidateRouter from "./ROUTES/candidateRouter.js";
import voteRouter from "./ROUTES/voteRouter.js";
import petitionRouter from "./ROUTES/petitionRouter.js";
// import mongoose from "mongoose" 

dotenv.config()

const app = express();

const PORT = process.env.PORT || 7000

const upload = multer({ dest: "upload/" })

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// mongoose.connect("mongodb://localhost/project_database")


app.use("/user", upload.single('file'), userRouter)

app.use("/party", upload.single('file'), isAuth, partyRouter)

app.use("/office", isAuth, officeRouter)

app.use("/candidate", isAuth, candidateRouter)

app.use("/vote", isAuth, voteRouter)

app.use("/petition", isAuth, petitionRouter)



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`) 
})