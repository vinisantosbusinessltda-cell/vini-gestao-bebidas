const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.get("*", (req, res) => {
  let estrutura = "<h2>Ficheiros encontrados no servidor:</h2><ul>";
  
  function listarFicheiros(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const caminhoCompleto = path.join(dir, item);
      const relativo = path.relative(__dirname, caminhoCompleto);
      if (fs.statSync(caminhoCompleto).isDirectory()) {
        if (!item.includes("node_modules") && !item.includes(".git")) {
          listarFicheiros(caminhoCompleto);
        }
      } else {
        estrutura += `<li>${relativo}</li>`;
      }
    });
  }

  listarFicheiros(__dirname);
  estrutura += "</ul>";
  res.send(estrutura);
});

module.exports = app;
