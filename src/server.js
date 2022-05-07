import express from "express"
import cors from "cors"
import userRouter from "./ROUTES/userRouter.js";
import partyRouter from "./ROUTES/partyRouter.js";
import officeRouter from "./ROUTES/officeRouter.js";

const app = express();

const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))


app.use("/user", userRouter)

app.use("/party", partyRouter)

app.use("/office", officeRouter)



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`) 
})