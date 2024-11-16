const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ajuste conforme a configuração do seu Sequelize

const FluxoCaixa = sequelize.define('FluxoCaixa', {
  tipo: {
    type: DataTypes.ENUM('Entrada', 'Saída'),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = FluxoCaixa;
