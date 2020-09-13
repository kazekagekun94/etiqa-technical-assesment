const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const passport = require("passport");

router.post("/", usersController.registerUser);
router.delete("/", usersController.deleteUser);
// router.get("/", usersController.getUsers);



module.exports = router;
