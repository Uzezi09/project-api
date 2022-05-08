import { petitions } from "../database.js";

const getPetition = (req, res) => {
  let id = parseInt(req.params.id)

  const check = petitions.find(petition => petition.id === id);

  if (check) {
    res.json(petitions.find(petition => petition.id === id));

    return;
  }

  if (!check) {
    res.status(400).json({ msg: 'Petion id not found' });

    return;
  }
  res.json(petitions)
}

export default getPetition