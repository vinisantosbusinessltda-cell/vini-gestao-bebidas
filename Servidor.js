const express = require("express");
const path = require("path");

const app = express();

// Diz ao servidor para ler os ficheiros estáticos da pasta public e da raiz (onde está o index.html)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname)));

// Rota principal que carrega o teu index.html original
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
