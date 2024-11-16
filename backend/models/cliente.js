// backend/models/cliente.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpfCnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

// Função para associar
Cliente.associate = (models) => {
  Cliente.hasMany(models.ContaReceber, {
    foreignKey: 'clienteId',
    as: 'contasRecebers', // Relacionamento inverso com ContaReceber
  });
};

// Função para associar
Cliente.associate = (models) => {
  Cliente.hasMany(models.ContaPagar, {
    foreignKey: 'clienteId',
    as: 'contasPagars', // Relacionamento inverso com ContaReceber
  });
};

module.exports = { Cliente };


