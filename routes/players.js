//detta anropas varje gång ett klientanrop kommer in till server.js

const express = require("express");
const router = express.Router();        //skickar information fram och tillbaka 
const playerController = require("../controllers/players");     //definierat en handler
//tar reda på vilken metod som används. Path och handler behövs
router.get("/players", playerController.getPlayers); //kan göras färdigt när players.js i controllermappen är klar);               //definiera en requesthandler

module.exports = router; 