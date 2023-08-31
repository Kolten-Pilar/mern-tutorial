const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); //for hashing password
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc: register user
//@route: POST /api/users
//access: public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please enter all fields')
  }

  //check if user exists
  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    }) //201 means something was created
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
});

//@desc: Authenticate user & get token
//@route: POST /api/users/login
//access: public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc: get users
//@route: GET /api/users
//access: public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "Get Users" });
});


module.exports = {
  getMe,
  registerUser,
  loginUser,
};
