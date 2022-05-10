import { offices } from "../database.js"

const deleteOffice = (req, res) => {
  const id = parseInt(req.params.id)

  for (let i=0; i < offices.length; i++) {
    const data = offices[i]
    if (data.id === id) {
      offices.splice(i, 1);

      return res.json({  
        status: 200,
        data: {
          msg: 'office Deleted', offices
        },
      });
    
    }
  }  
  return res.json({
    status: 400,
    error: 'Office not found'
  });

}

export default deleteOffice