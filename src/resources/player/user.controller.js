const { UserModel } = require("REST-API\src\resources\player\player.model.js");
const bcrypt = require("bcrypt"); 


async function registerUser(req, res, next) {
    try{ 
        const existingUser = await UserModel.findOne({username: req.body.username})
        if(existingUser) {
            return res.status(409).json("User already exists.");
        }
        const user = await new UserModel(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        user.password = hashedPassword;
        await user.save();
        user.password = undefined; 
        res.status(201).json(user); 
         
    } catch (error) {
        res.status(400).json(error);
    }};

async function loginUser(req, res, next) {

    const { username, password } = req.body;

    const user = await UserModel.findOne({username});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json("Wrong username or password")
    }
        req.session = user;
        user.password = undefined; 
        res.status(200).json(user);
}

async function logoutUser(req, res, next){
    req.session = null;
    res.status(204).json();
}

module.exports = { registerUser, loginUser, logoutUser };
