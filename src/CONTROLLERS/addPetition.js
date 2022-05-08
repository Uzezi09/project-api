import { petitions } from "../database.js";

const addPetition = (req, res) => {
  const obj = req.body;

  const check = petitions.find(petition => petition.createdBy === parseInt(obj.createdBy));

  if (!parseInt(obj.office)) {
    res.status(400).json({
      message: "Invalid petition office ID",
    });
    return;
  } 

  if (!(obj.body)) {
    res.status(400).json({
      message: "Invalid petition body",
    });
    return;
  } 

  if (!parseInt(obj.createdBy)) {
    res.status(400).json({
      message: "Invalid createdBy id",
    });
    return;
  } 

  if (check) {
    res.status(400).json({
      message: "petition id already exist",
    });
    return;
  }

  const newPetition = {
    id: petitions.length,
    createdOn: obj.createdOn,
    createdBy: obj.createdBy,
    office: obj.office,
    body: obj.body,
  };

  petitions.push(newPetition);

  res.json(petitions);
}

export default addPetition