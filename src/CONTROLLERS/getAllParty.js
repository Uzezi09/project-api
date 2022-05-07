import { party } from "../database.js"

const getParty = (req, res) => {
    res.json(party)
}

export default getParty