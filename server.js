const express = require("express");
const app = express();
const routes = require("./routes/players");  //här är sökvägen, och vi måste även läsa in innhållet (gör vi med require-funktionen)

app.use(express.json());
app.use('/', routes);           //för att använda routes. När vår app får ett anrop vet den att den ska titta i routes för att veta hur den ska hantera det

//startar server-applikationen
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Server is up and running" + listener.adress().port)
});        //processen har en miljö och den är tilldelad

//req.body innehåller post- och put-informationnpm start
