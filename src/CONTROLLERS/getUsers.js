import { users } from "../database.js" 

const getUsers = (req, res) => {
  const id = parseInt(req.params.id)
  // res.json(users.filter(user => user.id === parseInt(req.params.id)));

  const check = users.find((user) => user.id === id);

  if (check) {
    res.json(users.filter(user => user.id === id));
  }

  if (!check) {
    res.status(400).json({ msg: 'User id not found' });
    return;
  }

  // res.json(users)
};


export default getUsers