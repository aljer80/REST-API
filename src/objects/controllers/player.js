const { PlayerModel } = require("../models/player.js");
const { userJoiSchema } = require("../models/player.js");
const bcrypt = require("bcrypt"); 


//funktion för att skapa en spelare
async function createPlayer (req, res, next) {
    try {
        const newPlayer = await UserModel.create(req.body);
        res.status(201).json(newPlayer);      
    } catch (error) {
        res.status(500).json();
    }   
}


//funktion för att uppdatera en spelare
async function updatePlayer(req, res, next) {
    try {
        const existingPlayer = await UserModel.findById(req.params.id)
        if (!existingPlayer) {
            return res.status(404).json( req.params.id + "not found")
        }
        const player = await UserModel.findByIdAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json();
    }
}


//funktion för att radera en spelare
async function deletePlayerById(req, res, next){
    try {
        const existingPlayer = await UserModel.findById(req.params.id)
        if (!existingPlayer) {
            res.status(404).json( req.params.id + "not found")
        }
        const player = await UserModel.deleteOne({_id:req.params.id})
        res.status(204).json(player + " deleted");
    } catch (error) {
        res.status(500).json();
    }
}


//funktion för att hämta en specifik spelare
async function getPlayerById(req, res, next){
    const player = await UserModel.findOne({_id:req.params.id})
    if (player) {
        res.status(200).json(player); 
    } else {
        res.status(404).json(req.params.id + "not found");
    }
};


//funktion för att hämta alla spelare
async function getPlayers(req, res, next) {
    try{
        const players = await UserModel.find();
        res.status(200).json(players);
    } catch (error) {
        res.status(400).json(error);
    }
};


//funktion för att hämta spelare via nivå
async function getPlayersByLevel(req, res, next){
    try{
        const players = await UserModel.find({level:req.params.level}); 
        res.status(200).json(players);
    } catch (error) {
        res.status(400).json(error);
    }
};


module.exports = { createPlayer, updatePlayer, deletePlayerById, getPlayerById, getPlayers, getPlayersByLevel };
