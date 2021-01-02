const express = require("express");
const app = express();

//Carrega variable de configuració amb entorn development/produccio en fitxer .env
require("dotenv").config();


//Per evitar l'error de CORS en fer peticions des d'un altre servidor
const cors = require("cors");
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.use(cors());


// Iniciam el servidor en el Port 8080
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor iniciat a port ${port}`);
});

// NOMÉS A HEROKU

// directori amb static web src
app.use(express.static(__dirname + "/src/"));
//Handle Single Page Application
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/src/index.html"));