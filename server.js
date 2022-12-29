const express = require("express");
const app = express();
//const port = 3000;              //variabel för att lagra porten. Behöver man inte göra, men är vanligt. 
//const fs = require("fs");

//Definierar en endpoint. Och app.get bestämmer att det är request-metoden get endpointen ska lyssna efter. 
app.get("/api/players", (req, res) => {         
    res.status(200).send("Här är alla spelare " + req.params);
});


app.get("/api/players/:id", (req, res) => {         
    res.status(200).send("Här är en specifik spelare med id " + req.params.id);
 });


//startar server-applikationen
app.listen(3000, () => console.log("Server is up and running"));