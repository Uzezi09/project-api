import { users } from "../database.js" 

const getAllUsers = (req, res) => {
  
  res.json({
    status: 200,
    data: users
  })
};

// $ npm i cloudinary dotenv-safe jsonwebtoken multer bcrypt 
export default getAllUsers