import { party } from "../database.js"

const deleteParty = (req, res) => {
  const id = parseInt(req.params.id)
  // let us = toString(req.params.name);

  const check = party.find(parte => parte.id === id)

  if (check) {
    res.json({ msg: 'Party Deleted', party: party.filter(parte => parte.id !== id) });

    return;
  }

  if (!check) {
    res.json({ msg: 'Party not found'})
  }
}

export default deleteParty