const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const { playerRouter } = require("../objects/routers/player.js");

app.use(express.json());
app.use(cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 10,
    httpOnly: false
}));


app.use("/api/players", playerRouter); 

module.exports = { app };