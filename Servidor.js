const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestão de Bebidas</title>
        <style>
            :root {
                --primary: #2c3e50;
                --accent: #e74c3c;
                --bg: #f8f9fa;
                --card-bg: #ffffff;
                --text: #333333;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: var(--bg);
                color: var(--text);
                margin: 0;
                padding: 15px;
            }
            .header {
                text-align: center;
                background: var(--primary);
                color: white;
                padding: 20px;
                border-radius: 12px;
                margin-bottom: 20px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header h1 {
                margin: 0;
                font-size: 24px;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
            }
            .card {
                background: var(--card-bg);
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                margin-bottom: 20px;
            }
            .card h3 {
                margin-top: 0;
                color: var(--primary);
                border-bottom: 2px solid #eee;
                padding-bottom: 8px;
            }
            .form-group {
                margin-bottom: 12px;
            }
            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
                font-size: 14px;
            }
            input, select {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 6px;
                box-sizing: border-box;
                font-size: 16px;
            }
            .btn {
                background: #27ae60;
                color: white;
                border: none;
                padding: 12px 20px;
                font-size: 16px;
                border-radius: 6px;
                cursor: pointer;
                width: 100%;
                font-weight: bold;
                transition: background 0.2s;
            }
            .btn:hover {
                background: #219653;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 10px;
            }
            th, td {
                padding: 12px;
                text-align: left;
                border-bottom: 1px solid #ddd;
                font-size: 15px;
            }
            th {
                background: #f1f2f6;
                color: var(--primary);
            }
            .badge {
                background: #e1b12c;
                color: #fff;
                padding: 4px 8px;
                border-radius: 4px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🍺 Gestão de Bebidas</h1>
                <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Painel de Controlo Online</p>
            </div>

            <div class="card">
                <h3>Adicionar Novo Produto</h3>
                <div class="form-group">
                    <label for="nomeBebida">Nome da Bebida:</label>
                    <input type="text" id="nomeBebida" placeholder="Ex: Cerveja Heineken 600ml">
                </div>
                <div class="form-group">
                    <label for="qtdBebida">Quantidade em Stock (caixas/unidades):</label>
                    <input type="number" id="qtdBebida" placeholder="Ex: 24">
                </div>
                <button class="btn" onclick="alert('Produto registado com sucesso!')">Registar Produto</button>
            </div>

            <div class="card">
                <h3>Stock Atual</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cerveja Heineken 600ml</td>
                            <td><span class="badge">24 cx</span></td>
                        </tr>
                        <tr>
                            <td>Refrigerante Coca-Cola 2L</td>
                            <td>
