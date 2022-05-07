import { offices } from "../database.js"

const getOffice = (req, res) => {

  let id = parseInt(req.params.id);
  
  const check = offices.find(office => office.id === id);
  
  if (check) {
    res.json(offices.find(office => office.id === id));
  
    return;
  }
  
  if (!check) {
    res.status(400).json({ msg: 'Office id not found' });
  
    return;
  }
}

export default getOffice