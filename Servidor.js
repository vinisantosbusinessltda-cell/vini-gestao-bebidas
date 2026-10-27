const express = require("express");
const path = require("path");

const app = express();

// Aponta para a pasta correta "vini-gestao" onde estão os teus ficheiros
const pastaProjeto = path.join(__dirname, "vini-gestao");

app.use(express.static(pastaProjeto));

app.get("*", (req, res) => {
  res.sendFile(path.join(pastaProjeto, "index.html"));
});

module.exports = app;
