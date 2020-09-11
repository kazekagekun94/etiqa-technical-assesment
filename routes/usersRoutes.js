const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const passport = require("passport");

router.post("/register", usersController.registerUser);

module.exports = router;
