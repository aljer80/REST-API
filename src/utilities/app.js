const express = require("express");
const app = express();
const cors = require('cors');
const cookieSession = require("cookie-session");
const { playerRouter } = require("../objects/routers/player.js");


app.use(cors());
app.use(express.json());
app.use(cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 60 * 60 * 24,  //ms konverterat till min, h och antal h, alltså 1 dygn
    httpOnly: false
}));


app.use("/api/players", playerRouter); 

module.exports = { app };