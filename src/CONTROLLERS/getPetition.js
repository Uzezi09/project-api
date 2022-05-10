import { petitions } from "../database.js";

const getPetition = (req, res) => {
  let id = parseInt(req.params.id)

  const check = petitions.find(petition => petition.id === id);

  if (check) {
    res.json({
      status: 200,
      data: [petitions.find(petition => petition.id === id)]
    });
    return;
  }
 
  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Petion id not found'
    });

    return;
  }

}

export default getPetition