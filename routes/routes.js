const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { userModel } = require("../Model/userModel");
const bcrypt = require("bcrypt");
// Hashing is done at the time of registration , to store the user password

userRouter.post("/register", async (req, res) => {
  const { email, password, name, city } = req.body;
  //logic
  try {
    bcrypt.hash(password, 3, async (err, hash) => {
      console.log(hash);
      try {
        const user = new userModel({
          email: email,
          password: hash,
          name: name,
          city: city,
        });
        await user.save();
        res.status(200).send({ message: "registered successfully!" });
      } catch (err) {
        res.status(404).send({ message: err.message });
      }
    });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  var token = jwt.sign({ course: "backend" }, "secretkey");
  try {
    console.log(password, email);

    let user = await userModel.findOne({ email, password });
    console.log(user);
    if (user) {
      res.status(200).send({ msg: "Login successful", token: token });
    } else {
      res.status(404).send({ message: "credentials not found" });
    }
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

module.exports = { userRouter };
