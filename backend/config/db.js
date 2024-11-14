 // backend/db.js
const { Sequelize } = require('sequelize');

// Crie a instância do Sequelize com as credenciais do banco de dados
const sequelize = new Sequelize('erp_chaveiro', 'dba_erp_admin', 'ErpChaveiros#2024!Secure', {
  host: 'localhost',  // ou o IP/hostname do servidor
  dialect: 'mssql',   // se estiver usando SQL Server
});

// Teste a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

// Exporte a instância do Sequelize para usá-la em outros arquivos
module.exports = sequelize;
