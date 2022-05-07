import { offices } from "../database.js"

const deleteOffice = (req, res) => {
  const id = parseInt(req.params.id)

  const check = offices.find(office => office.id === id)

  if (check) {
    res.json({ msg: 'office Deleted', Offices: offices.filter(office => office.id !== id) });

    return;
  }

  if (!check) {
    res.json({ msg: 'Office not found' });
    
    return;
  }
}

export default deleteOffice