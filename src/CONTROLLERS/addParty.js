import { party } from "../database.js"

const addParty = (req, res) => {
  const addPartyObj = req.body;

  const check = party.find(parte => parte.name === addPartyObj.name);

  if (!addPartyObj.hqaddress) {
    res.status(400).json({
      message: "Party headquarters address is compulsory",
    });
    return;
  }

  if (!addPartyObj.name) {
    res.status(400).json({
      message: "Party name is compulsory",
    });
    return;
  }

  if (check) {
    res.json({ msg: 'Party name already exist' });

    return;
  }

  const newParty = {
    id: party.length,
    name: addPartyObj.name,
    hqaddress: addPartyObj.hqaddress,
    logoUrl: addPartyObj.logoUrl,
  }
  
  party.push(newParty);
  
  res.json(party);

}

export default addParty