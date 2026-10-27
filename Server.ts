import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sistema de Gestao de Bebidas a funcionar!");
});

app.listen(port, () => {
  console.log(`Servidor a correr na porta ${port}`);
});
