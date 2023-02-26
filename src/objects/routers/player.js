const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/user.js");
const { createPlayer, deletePlayerById, updatePlayer, getPlayerById, getPlayers, getPlayersByLevel } = require("../controllers/player.js");
const { userJoiSchema } = require ("../models/player.js");
const { validate } = require ("../../middlewares/middlewares.js"); 
const playerRouter = express.Router();

//get, put, post, delete
playerRouter.get("", getPlayers);
playerRouter.get("/byLevel/:id", getPlayersByLevel);    //
playerRouter.get("/:id", getPlayerById);

playerRouter.put("/:id", userIsLoggedIn, userLoggedInAsAdmin, validate(productJoiSchema), updatePlayer); //Får felmeddelande som pekar på den här raden: "ReferenceError: userIsLoggedIn is not defined"

playerRouter.post("", userIsLoggedIn, userLoggedInAsAdmin, validate(productJoiSchema), createPlayer);
playerRouter.post("/register", validate(userJoiSchema), registerUser);
playerRouter.post("/login", loginUser);
playerRouter.post("/logout", logoutUser);
playerRouter.delete("/:id", userIsLoggedIn, userLoggedInAsAdmin, deletePlayerById);
module.exports = { playerRouter };