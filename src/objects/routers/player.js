const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/player.js");
const { userJoiSchema } = require ("../models/player.js");
const { validate } = require ("../../middlewares/middlewares.js"); 
const playerRouter = express.Router();



playerRouter.post("/register", validate(userJoiSchema), registerUser);
playerRouter.post("/login", loginUser);
playerRouter.post("/logout", logoutUser);

module.exports = { playerRouter };