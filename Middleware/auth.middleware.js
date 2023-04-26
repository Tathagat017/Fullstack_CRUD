const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token.split(" ")[1]);
  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], "secretkey");
      if (decoded) {
        next();
      } else {
        res.send({ msg: "Please login " });
      }
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  } else {
    res.send({ msg: "Please login to access" });
  }
};
module.exports = { auth };
