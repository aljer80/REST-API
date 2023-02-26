const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const { playerRouter } = require("./resources/player/user.router");

app.use(express.json());
app.use(cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 10,
    httpOnly: false
}));


app.use("/api/users", playerRouter); //Stämmer denna url?

module.exports = { app };