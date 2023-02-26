const express = require("express");
const { registerUser, loginUser, logoutUser } = require("./user.controller");
const { userJoiSchema } = require ("./user.model");
const { validate } = require ("REST-API\src\middlewares.js"); //lägg in rätt sökväg här
const playerRouter = express.Router();



playerRouter.post("/register", validate(userJoiSchema), registerUser);
playerRouter.post("/login", loginUser);
playerRouter.post("/logout", logoutUser);

module.exports = { playerRouter };