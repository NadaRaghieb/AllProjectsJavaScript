const mongoose = require("mongoose");
const { Role } = require("../models/roleModel");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register

const addNewUser = async (req, res) => {
  console.log(req.body);
  console.log("Register user");
  let { fName, email, phone, passwordHash, role } = req.body;
  // let currentRole = await Role.findOne({ role: role }).exec();
  // role = currentRole._id;
  const addedUser = new User({
    fName,
    email,
    phone,
    passwordHash,
    role,
  });

  // const existingUser =  User.findOne({ email });
  //     if (existingUser)
  //       return res.status(400).json({
  //         errorMessage: "An account with this email already exists.",
  //       });

  if (!email || !passwordHash)
    return res
      .status(400)
      .json({ errorMessage: "Please enter all required fields." });

  if (passwordHash.length < 6)
    return res.status(400).json({
      errorMessage: "Please enter a password of at least 6 characters.",
    });

  // const salt = await bcrypt.genSalt();
  // const password = await bcrypt.hash(passwordHash, salt);

  // const savedUser = await newUser.save();

  // const token = jwt.sign(
  //   {
  //     user: savedUser._id,
  //   },
  //   process.env.JWT_SECRET
  // );

  addedUser
    .save()
    .then((result) => {
      console.log("User registered: " + result);
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error.message);
      res.json(error);
    });
};



// log in

const login = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, result) => {
    if (result === null) {
      return res
        .status(400)
        .send("NationalId and Password you entered is Wrong !!!.");
    }
    try {
      if (await bcrypt.compare(req.body.passwordHash, result.passwordHash)) {
        const payload = {
          email: result.email,
          
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        res.json({ message: "user logged in", token: token });
      } else {
        res.json({ message: "data is incorrect" });
      }
    } catch (error) {
      res.status(500).send();
    }
  });
};
const getAllUser = (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
};
const getUser=(req,res)=>{
  User.findOne({ _id: req.params.id}, (err, result) => {
    res.json(result);
  });
}
const saveRole = (req, res) => {
  const newRole = new Role({
      role: req.body.role,
  });
  newRole
    .save()
    .then((result) => res.json({ result: result }))
    .catch((err) => console.log(err));
};
const getAllArtist = (req, res) => {
  Role.find({ role: "Artist" }, (err, Artist) => {
    res.json(Artist);
  });
};
const getAllCustomers = (req, res) => {
  Role.find({ role: "Customer" }, (err, Customers) => {
    res.json(Customers); 
  });
};

const updateUserProfile =  (req, res) => {
  const user =  User.findById(req.user._id);

  if (user) {
    user.fName = req.body.fName || user.fName;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.passwordHash) {
      user.passwordHash = req.body.passwordHash;
    }
    const updatedUser =  user.save();

    res.json({
      _id: updatedUser._id,
      fName: updatedUser.fName,
      email: updatedUser.email,
      pic: updatedUser.pic,
     
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
};

module.exports = {
  addNewUser, 
  login,
  getAllUser,
  getUser,
  getAllArtist,
  getAllCustomers,
  saveRole,
  updateUserProfile
};
