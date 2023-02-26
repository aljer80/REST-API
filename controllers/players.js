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
   
// GET-anrop alla spelare
app.get("/api/players", (req, res) => {
  let players = JSON.parse(data);

  if (players && players.length > 0){
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).send(players);
  }else{
      res.set('Access-Control-Allow-Origin', '*');
      res.status(404).send();
  }
});


//Post-anrop. Definierar en endpoint. Skapar en ny spelare. 
app.post("/api/players", (req, res) => {
    res.status(201).json(req.body);
});

// POST-anrop
app.post("/api/players", (req, res) => {

  let players = JSON.parse(data);
  let player = req.body;
  let values = [];
  players.forEach(player => {
      values.push(player.id);
  });
  
  player.id = Math.max.apply(Math, values) + 1; 
      
  players.push(player);   //knuffar in player i players

  fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
      if (err) {
          res.set('Access-Control-Allow-Origin', '*');
          res.status(400).send();
      } else{
          res.set('Access-Control-Allow-Origin', '*');
          res.status(200).json(player);   //skickar tillbaka det skapade objektet
      }
  });
});


//Put-anrop. Definierar en endpoint. Uppdaterar en spelare. 
app.put("/api/players/:id", (req, res) => {
    res.status(200).json(req.body);
  });

//PUT-anrop
//kan lägga till validering. Kolla om id är en integer, om inte: felmeddelande. Om det är en int. gå vidare.
app.put("/api/players/:id", (req, res) => {
  let players = JSON.parse(data);
  let player = req.body;    //kommer från frontEnd
  index = players.findIndex(player => player.id === parseInt(req.params.id));
  exists = players.find(player => player.id === parseInt(req.body.id));   //player.id från req body tilldelas exists. 

  if (exists) {   //"om "personnumret" redan finns får du inte ändra"
      res.set('Access-Control-Allow-Origin', '*');
      res.status(400).send("Bad request.");   
  } else {
      players[index] = player;
      fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
          if (err) {
              res.set('Access-Control-Allow-Origin', '*');
              res.status(500).send();
          } else {
              res.set('Access-Control-Allow-Origin', '*');
              res.status(200).send("Jag har lyckats, grattis!"); //när du gör en put får du tillbaka
              //res.status(200).send(players[index]); //när du gör en put får du tillbaka ändringen, så som den står i databasen
          }
      });
  }
});


//Delete-anrop. Definierar en endpoint. Tar bort en spelare. 
  app.delete('/api/players/:id', (req, res) => {
    res.status(200).json(req.body);
  });


  app.delete("/api/players/:id", (req, res) => {
    
    let players = JSON.parse(data);
    let existingPlayer = players.find(player => player.id === parseInt(req.params.id));
    let index = players.indexOf(existingPlayer);

    if (players.find(player => player.id === parseInt(req.params.id))) {
    players.splice(index, 1);
    fs.writeFile("players.json", JSON.stringify(players, null, 2), function(err){
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).send("Player deleted");
        }
    });
    } else {
        res.status(404).send('The player with the given ID was not found.');
    }
});



 