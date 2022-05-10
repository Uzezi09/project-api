import { users } from "../database.js" 

const getUsers = (req, res) => {
  const id = parseInt(req.params.id)
  // res.json(users.filter(user => user.id === parseInt(req.params.id)));

  const check = users.find((user) => user.id === id);

  if (check) {
    res.json({
      status: 200,
      data: [users.filter(user => user.id === id)[0]]
    });
  }

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'User id not found'
    });
    return;
  } 

};


export default getUsers