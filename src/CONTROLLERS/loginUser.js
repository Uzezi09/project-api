import { users } from "../database.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";


const loginUser = async(req, res) => {
  const obj = req.body;

  const checkUser = users.find(user => user.email === obj.email)

  if (!obj.email) {
    res.status(400).json({
      status: 400,
      error: "email is compulsory",
    });
    return;
  }

  if (!obj.password) {
    res.status(400).json({
      status: 400,
      error: "password is compulsory",
    });
    return;
  }

  if (!checkUser) {
    res.status(400).json({
      status: 400,
      error: "Email not found",
    });
    return;
  }

  if (!bcrypt.compareSync(obj.password, checkUser.password)) {
    res.status(400).json({
      status: 400,
      error: "Password Incorrect", 
    });
    return;
  }

  res.json({
    status: 200,
    data: {
      ...checkUser,
      token: generateToken(checkUser)
    }
  })
}


export default loginUser