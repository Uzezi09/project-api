import {votes} from "../database.js"

const updateVote = (req, res) => {
  let id = parseInt(req.params.id)

  const check = votes.find(vote => vote.id === id)
 
  if (check) {
    const updateVoteObj = req.body;
    
    votes.forEach(vote => {
      if (vote.id === id) {
        vote.office = parseInt(updateVoteObj.office) ? parseInt(updateVoteObj.office) : vote.office;
        vote.candidate = parseInt(updateVoteObj.candidate) ? parseInt(updateVoteObj.candidate) : vote.candidate;

        vote.createdBy = parseInt(updateVoteObj.createdBy) ? parseInt(updateVoteObj.createdBy) : vote.createdBy;

        res.json({
          status: 200,
          msg: 'vote details updated', vote
        })
      }
    });
  } 

  if (!check) {
    res.status(400).json({
      status: 400,
      error: 'Vote not found'
    })
  }

}


export default updateVote