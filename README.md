# REST-API
Titel: REST-API (eget projekt)
<br>
Beskrivning av projektet: Ett API som kan användas till padel. 
Det har CRUD-funktionalitet så man kan skapa spelare, hämta en eller alla spelare, uppdatera spelare och ta bort spelare.<br>
Tanken är att man ska kunna bygga upp en egen databas med padelspelare och ranka dem. Databasen kan sedan användas till att sätta ihop jämna matcher. <br>
All data är sparad i en dokumentdatabas: MongoDB. Datan i databasen uppdateras då något läggs till, uppdateras eller tas bort.
APIét svarar med 404 om datan saknas och har även lagt in andra passande responskoder.<br>
Ett klient-gränssnitt för att anropa API:ets alla olika endpoints och presentera datan kommer så småningom att byggas, men har i det här projektet fokuserat på att tränat på backend och att gå från att lagra datan i en JSON-fil till att använda en databas. Har även lagt till viss validering. 

Nivåer: <br>
Level 1 and 2: Initiation. <br>
Level 3 and 4: Intermediate. <br>
Level 5: Advanced. <br>
Level 6 and 7: Professional. <br>
<br>

Info om hur projektet byggs och körs:<br>
1. Klona ner projektet från Git (kopiera repots URL och följ instruktionerna: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) <br>
2. Installera Express (skriv "npm istall Express" i terminalen).<br>
3. Starta servern (skriv "npm start" i terminalen).<br>
Nu är du igång!<br>
Du behöver inte installera något paket för att avhjälpa CORS-problem, finns kod för det där det behövs.<br>


Detta API har stöd för CRUP. I detta API kan du:<br>
Skapa spelare,<br>
hämta alla spelare, eller<br>
hämta en specifik spelare,<br>
uppdatera spelare, och<br>
ta bort spelare.<br>
<br>

Endpointen stödjer följande metoder;
Get, Put, Post, Delete

Get
Get används antingen ensamt eller i kombination med id för att hämta antingen alla, eller en specifik spelare.

Post
Post används i kombination med parametrarna kön, förmåga och hänthet. MongoDB ser tilldelar varje skapad spelare ett unikt ID automatiskt. 

Put
Put funktionen tar emot parametrar för id, kön, nivå och hänthet. 

Delete
Delete tar emot en id parameter för att radera den spelaren ur databasen.

Webbklienten använder sig av API för att utföra alla dessa funktioner (WEBBKLIENTEN ÄR EJ BYGGD ÄN). Webbklienten kommer använda sig av fetch-funktionaliteten för att göra anropen. 


