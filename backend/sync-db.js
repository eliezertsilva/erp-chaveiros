// backend/sync-db.js
const sequelize = require('./config/db'); // Adicione os modelos necessários
const contasReceber = require('./models/contasReceber');

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
