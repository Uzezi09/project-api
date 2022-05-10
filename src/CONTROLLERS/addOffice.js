import { offices } from "../database.js";

const addOffice = (req, res) => {
  const addOfficeObj = req.body;

  const check = offices.find(office => office.name === addOfficeObj.name)

  if (!addOfficeObj.type) {
    res.status(400).json({
      status: 400,
      error: "Office type is compulsory",
    });
    return;
  }
  
  if (!addOfficeObj.name) {
    res.status(400).json({
      status: 400,
      error: "Office name is compulsory",
    });
    return;
  }
  
  if (check) {
    res.status(400).json({
      status: 400,
      error: "Office name already exist",
    });
    return;
  }


  const newOffice = {
    id: offices.length,
    type: addOfficeObj.type,
    name: addOfficeObj.name,
  }
  
  offices.push(newOffice);
  
  res.json({
    status: 400,
    data: {
      ...newOffice,
      token: generateToken(newOffice)
    }
  });

}


export default addOffice