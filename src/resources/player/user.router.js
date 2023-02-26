const express = require("express");
const { registerUser, loginUser, logoutUser } = require("REST-API\src\resources\player\user.controller.js");
const { userJoiSchema } = require ("REST-API\src\resources\player\user.model.js");
const { validate } = require ("../../middlewares"); //lägg in rätt sökväg här
const playerRouter = express.Router();



playerRouter.post("/register", validate(userJoiSchema), registerUser);
playerRouter.post("/login", loginUser);
playerRouter.post("/logout", logoutUser);

module.exports = { playerRouter };