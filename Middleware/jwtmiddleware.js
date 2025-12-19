const jwt = require('jsonwebtoken')


const jwtMiddleware = (req, res, next) => {
  console.log("inside jwtmiddleware");
  try {
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);

    if (token) {
      const jwtResponce = jwt.verify(token,process.env.jwt_secret)
      console.log(jwtResponce);
      req.payload = jwtResponce.userId
      next()
    } else {
      res.status(401).json("PLease Provide token")
    }
  } catch {
    res.status(403).json("PLease Login")
  }
}
module.exports = jwtMiddleware