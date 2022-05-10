import { users } from "../database.js" 

const deleteUsers = (req, res) => {
  
  const id = parseInt(req.params.id)

  for (let i=0; i < users.length; i++) {
    const data = users[i]
    if (data.id === id) {
      users.splice(i, 1);

      return res.json({  
        status: 200,
        msg: 'user Deleted',
        data: {
          users
        }
      });
    
    }
  }  
  return res.json({
    status: 400,
    error: 'user not found'
  });

}

export default deleteUsers