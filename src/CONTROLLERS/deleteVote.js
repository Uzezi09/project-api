import { votes } from "../database.js";

const deleteVote = (req, res) => {
  const id = parseInt(req.params.id)

  const check = votes.find(vote => vote.id === id)

  if (check) {
    res.json({ msg: 'office Deleted', Votes: votes.filter(vote => vote.id !== id) });

    return;
  }

  if (!check) {
    res.json({ msg: 'vote id not found' });
    
    return;
  }
}

export default deleteVote