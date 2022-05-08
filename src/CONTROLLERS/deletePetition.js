import { petitions } from "../database.js"

const deletePetition = (req, res) => {
  const id = parseInt(req.params.id)

  const check = petitions.find(petition => petition.id === id)

  if (check) {
    res.json({ msg: 'petition Deleted', petition: petitions.filter(petition => petition.id !== id) });

    return;
  }

  if (!check) {
    res.json({ msg: 'Petition id not found' });
    
    return;
  }

  res.json(petitions);
}

export default deletePetition