const isAdmin = (req, res, next) => {
    
  if(req.user && req.user.isAdmin) {
      next()
  }
  else{
      res.status(400).json({
          status: 400,
          error: {
              message: `Sorry, only admins are authorized to do this`
          }
      })
  }

  
}

export default isAdmin