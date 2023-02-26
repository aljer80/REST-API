const express = require("express");
const { registerUser, loginUser, logoutUser } = require("REST-API\src\resources\player\user.controller.js");
const { userJoiSchema } = require ("REST-API\src\resources\player\user.model.js");
const { validate } = require ("../../middlewares"); //lägg in rätt sökväg här
const userRouter = express.Router();



userRouter.post("/register", validate(userJoiSchema), registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

module.exports = { userRouter };