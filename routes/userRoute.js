const router = require("express").Router();
const userController = require("../middlewares/userController");
const { check, validationResult } = require("express-validator");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../middlewares/verifyToken");


// ***** Update User Password *****
router.put("/updatePassword/:id", [
    check("password")
.isLength({ min: 5 })
.withMessage("Password must be of 5 characters")
] ,verifyToken, userController.updateUserPassword);


// ***** Update User Data except email and password *****
router.put("/updateUser/:id", [
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
      .withMessage("Last name must be of 3 characters")
  ], verifyToken, userController.updateUserData)


// ***** Delete User *****
router.delete("/deleteUser", verifyToken, userController.deleteUser)

// ***** Get all Users *****
router.get("/", verifyTokenAndAdmin, userController.getAllUsers)

// ***** Get Single User *****
router.get("/find/:id", verifyTokenAndAdmin, userController.getSingleUser)

module.exports = router;