const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Sistema de Gestao de Bebidas a funcionar!");
});

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor local a correr na porta ${port}`);
  });
}

module.exports = app;
