import { party } from "../database.js"

const getParty = (req, res) => {
    res.json({
        status: 200,
        data: party
    })
}

export default getParty