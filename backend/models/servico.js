// backend/models/servico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Servico = sequelize.define('Servico', {
tipoServico: {
    type: DataTypes.STRING,
    allowNull: false,
},
descricao: {
    type: DataTypes.STRING,
    allowNull: true,
},
status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'em andamento',
    validate: {
    isIn: [['em andamento', 'concluído', 'cancelado']],
    },
},
preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
},
});


module.exports = Servico;
