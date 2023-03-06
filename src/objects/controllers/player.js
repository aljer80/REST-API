const { PlayerModel } = require("../models/player.js");
const { userJoiSchema } = require("../models/player.js");
const bcrypt = require("bcrypt"); 


//funktion för att skapa en spelare
async function createPlayer (req, res, next) {
    try {
        const newPlayer = await PlayerModel.create(req.body);
        res.status(201).json(newPlayer);      
    } catch (error) {
        console.log(error.message);
        res.status(500).json();
    }   
}


//funktion för att uppdatera en spelare
async function updatePlayer(req, res, next) {
    try {
        const existingPlayer = await PlayerModel.findById(req.params.id)
        if (!existingPlayer) {
            return res.status(404).json( "There is no player with id " + req.params.id)
        }
        const player = await PlayerModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true});
        player.password =  await bcrypt.hash(req.body.password, 10);
        await player.save();
        player.password = undefined;
        res.status(200).json(player);
    } catch (error) {
        console.log(error.message);
        res.status(500).json();
    }
}


//funktion för att radera en spelare
async function deletePlayerById(req, res, next){
    try {
        const existingPlayer = await PlayerModel.findById(req.params.id)
        if (!existingPlayer) {
            res.status(404).json( req.params.id + "not found")
        }
        const player = await PlayerModel.deleteOne({_id:req.params.id})
        res.status(200).json("The selected player has been deleted");
    } catch (error) {
        console.log(error.message);
        res.status(500).json();
    }
}


//funktion för att hämta en specifik spelare
async function getPlayerById(req, res, next){
    try{
        const player = await PlayerModel.findOne({_id:req.params.id})
        if (player) {
            res.status(200).json(player.firstname+ " " + player.lastname + ", " + player.side + ", " +"level " + player.level)
        } else {
            res.status(404).json("Player with id " + req.params.id + " was not found");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json();
    }
   
};


//funktion för att hämta alla spelare
async function getPlayers(req, res, next) {
    try{
        const players = await PlayerModel.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(400).json(error);
    }
};


//funktion för att hämta spelare via nivå
async function getPlayersByLevel(req, res, next){
    try{
        const players = await PlayerModel.find({level:req.params.level}); 
        res.status(200).json(players);
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = { createPlayer, updatePlayer, deletePlayerById, getPlayerById, getPlayers, getPlayersByLevel };
