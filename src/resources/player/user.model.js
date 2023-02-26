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
    level: {type: String, required: true}

});

const PlayerModel = models.user || model("player", PlayerSchema);  //models.player? vad står .user för? ska det vara .player?

const userJoiSchema = Joi.object({
    username: Joi.string().email().required(), 
    password: Joi.string().min(6).required()   
});

module.exports = { PlayerModel, userJoiSchema };