import { users } from "../database.js" 

const getAllUsers = (req, res) => {
  
  res.json(users)
};

// $ npm i cloudinary dotenv-safe jsonwebtoken multer bcrypt 
export default getAllUsers