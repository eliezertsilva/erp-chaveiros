const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ajuste conforme a configuração do seu Sequelize

const ContaPagar = sequelize.define('ContaPagar', {
    clienteId: {
        type: DataTypes.INTEGER,
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
  dataVencimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataPagamento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Pendente', 'Pago'),
    defaultValue: 'Pendente',
  },
});

// Relacionamento com a tabela de clientes
ContaPagar.associate = (models) => {
    ContaPagar.belongsTo(models.Cliente, {
      foreignKey: 'clienteId',
      as: 'clientes', // Define o alias 'cliente'
    });
  };

module.exports = ContaPagar;
