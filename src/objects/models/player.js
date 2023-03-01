const { Schema, model, models } = require("mongoose");
const Joi = require("joi"); 

const PlayerSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, minLength: 6},
    isAdmin: {type: Boolean, default: false},
    firstname: {type: String, required: true},
    lastname:{type: String, required: true},
    gender: {type: String, required: true},
    side: {type: String, required: true},
    level: {type: Number, required: true}  //ändra till number? Matchiskalan     
}); 

const PlayerModel = models.player || model("player", PlayerSchema);


const LevelSchema = new Schema({
    username: {type: String, required: true},
    level: { type: Number, required: true, maxLength: 2}
})

const LevelModel = models.level || model("level", LevelSchema);


const userJoiSchema = Joi.object({
    username: Joi.string().email().required(), 
    password: Joi.string().min(6).required(),   
    isAdmin: Joi.string(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    gender: Joi.string().required(),
    side: Joi.string().required(),
    level: Joi.number().required()

});

module.exports = { PlayerModel, LevelModel, userJoiSchema };