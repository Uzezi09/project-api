import { offices } from "../database.js";

const addOffice = (req, res) => {
  const addOfficeObj = req.body;

  const check = offices.find(office => office.name === addOfficeObj.name)

  if (!addOfficeObj.type) {
    res.status(400).json({
      message: "Office type is compulsory",
    });
    return;
  }
  
  if (!addOfficeObj.name) {
    res.status(400).json({
      message: "Office name is compulsory",
    });
    return;
  }
  
  if (check) {
    res.status(400).json({
      message: "Office name already exist",
    });
    return;
  }


  const newOffice = {
    id: offices.length,
    type: addOfficeObj.type,
    name: addOfficeObj.name,
  }
  
  offices.push(newOffice);
  
  res.json(offices);

}


export default addOffice