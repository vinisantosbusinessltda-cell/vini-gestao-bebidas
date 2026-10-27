const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Lista de pastas possíveis onde o teu projeto pode estar
const pastasPossiveis = [
  path.join(__dirname, "vini-gestao"),
  path.join(__dirname),
  path.join(__dirname, "public"),
  path.join(__dirname, "dist")
];

// Configurar as pastas estáticas que existirem
pastasPossiveis.forEach(pasta => {
  if (fs.existsSync(pasta)) {
    app.use(express.static(pasta));
  }
});

// Rota universal para encontrar o index.html independentemente da pasta exata
app.get("*", (req, res) => {
  for (const pasta of pastasPossiveis) {
    const indexPath = path.join(pasta, "index.html");
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
  }
  res.status(404).send("Ficheiro index.html não encontrado.");
});

module.exports = app;
