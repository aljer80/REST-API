const { PlayerModel } = require("../models/player.js");
const bcrypt = require("bcrypt"); 

//funktion för att registrera och skapa en användare/spelare och kryptera lösenordet
async function registerPlayer(req, res, next) {
    try{ 
        const existingUser = await PlayerModel.findOne({username: req.body.username})
        if(existingUser) {
            return res.status(409).json("User already exists.");
        }
        const user = await new PlayerModel(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
        await user.save();
        user.password = undefined; 
        res.status(201).json(user); 
         
    } catch (error) {
        res.status(400).json(error);
    }};


//funktion för att logga in
async function loginPlayer(req, res, next) {
    const { username, password } = req.body;
    console.log(username);
    const user = await PlayerModel.findOne({username});
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json("Wrong username or password")
    }
        req.session = user;             //cookie skapas när req.session manipuleras
        user.password = undefined; 
        res.status(200).json(user);
}

//funktion för att logga ut
async function logoutPlayer(req, res, next){
    req.session = null;
    res.status(204).json("You have successfully logged out");
}


module.exports = { registerPlayer, loginPlayer, logoutPlayer };