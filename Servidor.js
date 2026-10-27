const express = require("express");

const app = express();

// Página Principal
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
            <a class="btn" href="/painel">Painel de Controlo</a>
        </div>
    </body>
    </html>
  `);
});

// Página do Painel de Controlo
app.get("/painel", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Painel de Controlo - Distribuidora</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f9; color: #333; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
            h1 { color: #0275d8; text-align: center; }
            .btn-voltar { display: inline-block; background: #6c757d; color: white; padding: 8px 15px; text-decoration: none; border-radius: 5px; margin-bottom: 20px; }
            ul { list-style-type: none; padding: 0; }
            li { background: #e9ecef; margin: 8px 0; padding: 10px; border-radius: 4px; display: flex; justify-content: space-between; }
        </style>
    </head>
    <body>
        <div class="container">
            <a class="btn-voltar" href="/">← Voltar</a>
            <h1>📦 Painel de Controlo</h1>
            <p>Bem-vindo à gestão da distribuidora!</p>
            <h3>Bebidas em Stock:</h3>
            <ul>
                <li><span>Cerveja Heineken 600ml</span> <strong>24 cx</strong></li>
                <li><span>Refrigerante Coca-Cola 2L</span> <strong>15 cx</strong></li>
                <li><span>Água Mineral 500ml</span> <strong>50 cx</strong></li>
            </ul>
        </div>
    </body>
    </html>
  `);
});

module.exports = app;
