const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./config/db");
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes'); // Certifique-se que o caminho está correto
const servicosRoutes = require('./routes/servicos'); // Certifique-se que o caminho está

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de clientes
app.use('/api', clientesRoutes);  // Isso adiciona o prefixo '/api' para todas as rotas em clientes.js
app.use('/api', servicosRoutes);

// Definir a porta
db.authenticate()
  .then(() => console.log("Conectado ao banco de dados com sucesso."))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });