// models/contaReceber.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Importando a configuração do banco

// Definindo o modelo de ContaReceber
const ContaReceber = sequelize.define('ContaReceber', {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  dataVencimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pendente', 'paga', 'cancelada'),
    defaultValue: 'pendente',
  },
  dataPagamento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

// Relacionamento com a tabela de clientes
ContaReceber.associate = (models) => {
  ContaReceber.belongsTo(models.Cliente, {
    foreignKey: 'clienteId',
    as: 'clientes', // Define o alias 'cliente'
  });
};

module.exports = ContaReceber;
