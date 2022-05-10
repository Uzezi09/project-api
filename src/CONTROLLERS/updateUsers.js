import { users } from "../database.js"


const updateUsers = (req, res) => {
    
    const id = parseInt(req.params.id)
    
    const check = users.find(user => user.id === id);

  if (check) {
    const updateDataObj = req.body
      users.forEach(user => {
        if (user.id === id) {
          user.firstname = updateDataObj.firstname ? updateDataObj.firstname : user.firstname;
          user.lastname = updateDataObj.lastname ? updateDataObj.lastname : user.lastname;
          user.password = updateDataObj.password ? updateDataObj.password : user.password;

          res.json({
            status: 200,
            data: {
              msg: 'User details Update', users
            }
          });
        }
      });
  }  
  
  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'User id not found'
    });

    return;
  }
  res.json(users)
}

export default updateUsers