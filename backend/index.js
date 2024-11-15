const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes'); // Certifique-se que o caminho está correto

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de clientes
app.use('/api', clientesRoutes);  // Isso adiciona o prefixo '/api' para todas as rotas em clientes.js

// Definir a porta
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
