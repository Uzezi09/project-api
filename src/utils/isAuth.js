import jwt from "jsonwebtoken"

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(" ")[1]; // "Bearer XXXXXXXXXXXXXXXXXX"

    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ status: 401, error: "Invalid Token" });
          return
        }
        req.user = decode
        next()
      }
    )

  } else {
    res.status(400).json({
      status: 400,
      error: "Please login",
      });
    }
};
      
      

export default isAuth