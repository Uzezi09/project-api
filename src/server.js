import express from "express"
import cors from "cors"
import userRouter from "./ROUTES/userRouter.js";
import partyRouter from "./ROUTES/partyRouter.js";
import officeRouter from "./ROUTES/officeRouter.js";
import candidateRouter from "./ROUTES/candidateRouter.js";
import voteRouter from "./ROUTES/voteRouter.js";

const app = express();

const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.use("/user", userRouter)

app.use("/party", partyRouter)

app.use("/office", officeRouter)

app.use("/candidate", candidateRouter)

app.use("/vote", voteRouter)



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`) 
})