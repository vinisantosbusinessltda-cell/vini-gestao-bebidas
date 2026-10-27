const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Distribuidora de Bebidas</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; text-align: center; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            h1 { color: #d9534f; }
            p { font-size: 18px; }
            .btn { display: inline-block; background: #0275d8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🍺 Distribuidora de Bebidas</h1>
            <p>Sistema a funcionar perfeitamente na Vercel!</p>
            <a class="btn" href="#">Painel de Controlo</a>
        </div>
    </body>
    </html>
  `);
});

module.exports = app;
