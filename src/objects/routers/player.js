const express = require("express");
const playerRouter = express.Router();

const { registerUser, loginUser, logoutUser } = require("../controllers/auth.js");
const { createPlayer, deletePlayerById, updatePlayer, getPlayerById, getPlayers, getPlayersByLevel } = require("../controllers/player.js");
const { userJoiSchema } = require ("../models/player.js");
const { validate, userIsLoggedIn, userLoggedInAsAdmin } = require ("../../middlewares/middlewares.js"); 


//get, put, post, delete
playerRouter.get("", getPlayers);
playerRouter.get("/byLevel/:id", getPlayersByLevel); 
playerRouter.get("/:id", getPlayerById);

playerRouter.put("/:id", userIsLoggedIn, userLoggedInAsAdmin, validate(userJoiSchema), updatePlayer); 

playerRouter.post("", userIsLoggedIn, userLoggedInAsAdmin, validate(userJoiSchema), createPlayer);
playerRouter.post("/register", validate(userJoiSchema), registerUser);
playerRouter.post("/login", loginUser);
playerRouter.post("/logout", logoutUser);
playerRouter.delete("/:id", userIsLoggedIn, userLoggedInAsAdmin, deletePlayerById);
module.exports = { playerRouter };