const express = require("express");
const app = express();
const dotenv = require("dotenv");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { check, validationResult } = require("express-validator");

dotenv.config();

// ***** User Registration Controller  *****

const registration = async (req, res) => {
  // checking validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ errors: errors.array() });
  }

  //   check whether user with this email already exit

  let newUser = await User.findOne({
    email: req.body.email,
  });

  if (newUser) {
    return res
      .status(403)
      .json({ message: "User already exists with this email address " });
  }

  newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SEC
    ).toString(),
  });

  // Create authentication token
  const data = {
    newUser: {
      id: newUser._id,
    },
  };
  const accessToken = jwt.sign(data, process.env.JWT_SEC);

  // Set authentication token in cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
  const saveUser = await newUser.save();
  const { password, ...userData } = saveUser._doc;
  res.status(200).json({ ...userData, accessToken });
};

// ***** User Login Controlller *****

const userLogin = async (req, res) => {
  // checking validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ errors: errors.array() });
  }
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    try {
      const hashPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.CRYPTO_SEC
      );

      const orignalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

      if (orignalPassword !== req.body.password) {
        return res.status(404).json({ message: "Password is incorrect" });
      }
    } catch (error) {
      console.error("Error decrypting password:", error);
      return res.status(500).json({ message: "Login failed 1", error: error });
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "login failed", "error is ": error });
  }
};

// ***** User Password Update *****

const updateUserPassword = async (req, res) => {
  const user = await User.findById(req.params.id);

  // if user does not exit
  if (!user) {
    return res.status(500).json("User not found");
  }

  // Decrypting the password
  const hashPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.CRYPTO_SEC
  );
  const originalPassword = hashPassword.toString(CryptoJS.enc.Utf8);
  if (originalPassword !== req.body.oldPassword) {
    return res.status(400).json({ message: "Incorrect old password" });
  }

  if (req.body.newPassword.length < 5) {
    return res
      .status(400)
      .json({ message: "Password must be of 5 characters" });
  }

  //   Encrypt new password
  const newHashPassword = CryptoJS.AES.encrypt(
    req.body.newPassword,
    process.env.CRYPTO_SEC
  ).toString();

  user.password = newHashPassword;
  await user.save();
  return res.status(200).json({ message: "Password Updated Successfully" });
};

//  ***** Update User Data except email and Password *****

const updateUserData = async (req, res) => {
  const updateData = { ...req.body };
  delete updateData.email; // delete email from from user
  delete updateData.password; // delete password from from user

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { $set: updateData },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(400).json({ message: "Data not updated" });
  }
  res
    .status(201)
    .json({ message: "Data Updated Successfully", data: updatedUser });
};

// ***** Delete User *****

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    return res.status(200).json("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: "User not Deleted", error: error });
  }
};

// ***** Get all Users *****

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("users : " + users);
    return res.status(200).json({ message: "Found all users", USERS: users });
  } catch (error) {
    return res.status(200).json({ message: "Users not found", ERROR: error });
  }
};

// ***** Get Single User *****

const getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    const { password, ...others } = singleUser._doc;
    console.log("users : " + others);
    return res.status(200).json({ message: "User found", USER: others });
  } catch (error) {
    return res.status(200).json({ message: "User not found", ERROR: error });
  }
};

exports.registration = registration;
exports.userLogin = userLogin;
exports.updateUserPassword = updateUserPassword;
exports.updateUserData = updateUserData;
exports.deleteUser = deleteUser;
exports.getAllUsers = getAllUsers;
exports.getSingleUser = getSingleUser;
