const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const { userRouter } = require("REST-API\src\resources\player\user.router.js");

app.use(express.json());
app.use(cookieSession({
    secret: "s3cr3t",
    maxAge: 1000 * 10,
    httpOnly: false
}));


app.use("/api/users", userRouter);

 
// Här är ett bra ställe att lägga till routers och andra middlewares.

module.exports = { app };