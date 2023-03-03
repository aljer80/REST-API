const express = require("express");
const playerRouter = express.Router();

const { registerPlayer, loginPlayer, logoutPlayer } = require("../controllers/auth.js");
const { createPlayer, deletePlayerById, updatePlayer, getPlayerById, getPlayers, getPlayersByLevel } = require("../controllers/player.js");
const { userJoiSchema } = require ("../models/player.js");
const { validate, userIsLoggedIn, userLoggedInAsAdmin } = require ("../../middlewares/middlewares.js"); 


//get, put, post, delete
playerRouter.get("", getPlayers);  // ska man kunna hämta spelare utan att vara inloggad?
playerRouter.get("/byLevel/:level", getPlayersByLevel);
playerRouter.get("/:id", userLoggedInAsAdmin, getPlayerById); // userIsLoggedIn funkar när jag provar med den

playerRouter.put("/:id",userLoggedInAsAdmin, validate(userJoiSchema), updatePlayer);

playerRouter.post("", userIsLoggedIn, userLoggedInAsAdmin, validate(userJoiSchema), createPlayer);
playerRouter.post("/register", validate(userJoiSchema), registerPlayer);
playerRouter.post("/login", loginPlayer);
playerRouter.post("/logout", logoutPlayer);
playerRouter.delete("/:id", userIsLoggedIn, userLoggedInAsAdmin, deletePlayerById);
module.exports = { playerRouter };