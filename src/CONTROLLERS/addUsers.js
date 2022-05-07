import { users } from "../database.js"; 


const addUsers = (req, res) => {
  const obj = req.body;

  const check = users.find((user) => user.email === obj.email);

  if (!obj.firstname) {
    res.status(400).json({
      message: "firstname is compulsory",
    });
    return;
  } 

  if (!obj.lastname) {
    res.status(400).json({
      message: "lastname is compulsory",
    });
    return;
  } 

  if (check) {
    res.status(400).json({
      message: "Email already exist",
    });
    return;
  }

  const newData = {
    id: users.length,
    firstname: obj.firstname,
    lastname: obj.lastname,
    phonenumber: obj.phonenumber,
    email: obj.email,
    password: obj.password,
    role: obj.role,
    isadmin: obj.isadmin
  };

  users.push(newData);

  res.json(users);
};

export default addUsers;