import { party } from "../database.js"

const getParty = (req, res) => {
  let id = parseInt(req.params.id);

  const check = party.find(parte => parte.id === id);

  if (check) {
    res.json(party.find(parte => parte.id === id));

    return;
  }

  if (!check) {
    res.status(400).json({ msg: 'User id not found' });

    return;
  }
}

export default getParty