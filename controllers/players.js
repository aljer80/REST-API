const express = require("express");
const fs = require("fs");     //här använder vi fs för det är här vi vill anropa databasen (läsa eller skriva till en filstruktur)
const url = require("url");
//rad 5 behöver ses över. googla parseURL. req är inte definierat på rad 5  och 28
const parseURL = url.parse(req.url,true);  //variabel som fångar in det användaren skriver in

//Get-anrop. Definierar en endpoint. Hämtar alla spelare. Lyssnar efter metoden request.
if (parseURL === "api/players" && method === "GET") {
    const getPlayers = (req, res) => {
        res.status(200).send("All the players " + req.params);}
} else {
        res.statusCode = 400; 
        res.end("API Endpoint and method not supported");
        }     
module.exports = {getPlayers};
   

//Post-anrop. Definierar en endpoint. Skapar en ny spelare. 
app.post("/api/players", (req, res) => {
    res.status(201).json(req.body);
  });

//Put-anrop. Definierar en endpoint. Uppdaterar en spelare. 
app.put("/api/players/:id", (req, res) => {
    res.status(200).json(req.body);
  });

//Delete-anrop. Definierar en endpoint. Tar bort en spelare. 
  app.delete('/api/players/:id', (req, res) => {
    res.status(200).json(req.body);
  });


// i response avslutar vi med att göra json.stringify 
//error => { //om det blir fel någonstans
 //   res.end(JSON.stringify(400,error));
//}
 //med .then skickar vi tillbaks promise eller .then
 
 
 //för varje funktion eller anrop skickar vi resultatet tillbaka: 
 //module.exports = {newPlayer};  
