import { party } from "../database.js"

const getParty = (req, res) => {
  let id = parseInt(req.params.id);

  const check = party.find(parte => parte.id === id);

  if (check) {
    res.json({
      status: 200,
      data: [party.find(parte => parte.id === id)]
    });

    return;
  }

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'User id not found'
    });

    return;
  }
} 

export default getParty