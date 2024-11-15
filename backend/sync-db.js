// backend/sync-db.js
const sequelize = require('./config/db');
const Cliente = require('./models/cliente');
const Servico = require('./models/servico'); // Adicione os modelos necessários

(async () => {
  try {
    await sequelize.sync({ alter: true }); // O 'alter' ajusta as tabelas conforme o modelo
    console.log('Banco de dados sincronizado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
    process.exit(1);
  }
})();
