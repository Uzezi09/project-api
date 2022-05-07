import { users } from "../database.js" 

const deleteUsers = (req, res) => {
  
  const id = parseInt(req.params.id)


    // write your delete function
  const check = users.find((user) => user.id === id);
  

  if (check) {
    res.json({msg: 'user deleted'});

    return users;
  }

  if (!check) {
    res.status(400).json({ msg: 'User id not found'});

    return;
  }
  

  // res.json(users)
}

export default deleteUsers