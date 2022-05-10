import { offices } from "../database.js";

const updateOffice = (req, res) => {
  let id = parseInt(req.params.id)

  const check = offices.find(office => office.id === id)
 
  if (check) {
    const updateOfficeObj = req.body;
    
    offices.forEach(office => {
      if (office.id === id) {
        office.type = updateOfficeObj.type ? updateOfficeObj.type : office.type;
        office.name = updateOfficeObj.name ? updateOfficeObj.name : office.name;

        res.json({
          status: 200,
          data: {
            msg: 'Office details updated', office
          }
        })
      }
    });
  } 

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Office not found'
    })
    
    return;
  }

}

export default updateOffice