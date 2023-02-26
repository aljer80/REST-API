const { Schema, model, models } = require("mongoose");
const Joi = require("joi"); 

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, minLength: 6},
    isAdmin: {type: Boolean, default: false}
});

const UserModel = models.user || model("user", UserSchema);

const userJoiSchema = Joi.object({
    username: Joi.string().email().required(), 
    password: Joi.string().min(6).required()   
});

module.exports = { UserModel, userJoiSchema };