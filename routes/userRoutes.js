const express = require("express");

const router = express.Router();

const {register,login,deleteUser,getUserDetails,updateUserDetails} = require("../controllers/userController");


router.post("/register",register);
router.post("/login",login);
router.delete("/delete/:userId",deleteUser);
router.get("/user-details/:userId",getUserDetails);
router.put("/update-user-details/:userId",updateUserDetails);

module.exports = router;