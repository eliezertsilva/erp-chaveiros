"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source"); // Certifique-se de importar a configuração do DataSource
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes")); // Importando as rotas
require('dotenv').config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Inicializando a conexão com o banco de dados
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Conectado ao SQL Server com sucesso!');
    // Definir as rotas
    app.use('/api', clientRoutes_1.default);
    // Iniciar o servidor
    app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
})
    .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});
