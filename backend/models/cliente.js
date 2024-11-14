// backend/models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');  // Importe a instância do Sequelize

// Defina o modelo 'Cliente'
const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exporte o modelo para ser utilizado em outros arquivos
module.exports = Cliente;

