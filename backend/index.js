// backend/index.js
const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clientes'); // Importar as rotas
const sequelize = require('./config/db');  // Importar a instância do Sequelize

app.use(express.json());

// Registrar as rotas
app.use('/api/clientes', clienteRoutes);

// Teste se a conexão com o banco de dados está funcionando
sequelize.sync()  // Sincroniza os modelos com o banco
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar os modelos:', error);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
