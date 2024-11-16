const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes'); // Certifique-se que o caminho está correto
const servicosRoutes = require('./routes/servicos'); // Certifique-se que o caminho está correto
const contaPagarRoutes = require('./routes/contasPagar');
const contaReceberRoutes = require('./routes/contasReceber');
const fluxoCaixaRoutes = require('./routes/fluxoCaixa');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar as rotas de clientes
app.use('/api/clientes', clientesRoutes);  // Isso adiciona o prefixo '/api' para todas as rotas em clientes.js
app.use('/api/servicos', servicosRoutes);  // Isso adiciona o prefixo '/api' para todas as rotas em servicos.js
app.use('/api/contasPagar', contaPagarRoutes);
app.use('/api/contasReceber', contaReceberRoutes);
app.use('/api/fluxoCaixa', fluxoCaixaRoutes);

// Definir a porta
const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });