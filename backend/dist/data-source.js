"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Client_1 = require("./models/Client"); // ou o caminho correto para o seu modelo
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql', // ou 'mysql', 'postgres', dependendo do seu banco
    host: process.env.DB_HOST, // 'localhost' ou o host do seu banco
    port: 1433, // ou o port que seu banco usa
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Pode ser false em produção, mas true em desenvolvimento para criar as tabelas automaticamente
    logging: true, // Log de queries no console (opcional)
    entities: [Client_1.Client], // Adicione todos os modelos aqui
    migrations: [],
    subscribers: [],
});
