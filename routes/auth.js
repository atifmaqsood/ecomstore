const router = require("express").Router();
const userController = require("../middlewares/userController");
const { check, validationResult } = require("express-validator");

// User Registration endpoint
router.post(
  "/register",
  [
    check("firstname")
      .not()
      .isEmpty()
      .withMessage("First name cannot be empty")
      .isLength({ min: 3 })
      .withMessage("First name must be of 3 characters"),
    check("lastname")
      .not()
      .isEmpty()
      .withMessage("Last name cannot be empty")
      .isLength({ min: 3 })
      .withMessage("Last name must be of 3 characters"),
    check("email").isEmail().withMessage("Enter correct email"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must be of 5 characters"),
  ],
  userController.registration
);

// User Login endpoint
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Enter correct email"),
    check("password").not().isEmpty().withMessage("Password cannot be empty"),
  ],
  userController.userLogin
);

module.exports = router;
