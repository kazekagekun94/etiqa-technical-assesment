const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const passport = require("passport");

router.post("/", usersController.registerUser);
router.delete("/", usersController.deleteUser);
router.put("/", usersController.updateUser);



module.exports = router;
