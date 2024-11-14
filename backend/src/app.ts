import express from 'express';
import cors from 'cors';
import { AppDataSource } from './data-source';  // Certifique-se de importar a configuração do DataSource
import clientRoutes from './routes/clientRoutes';  // Importando as rotas

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Inicializando a conexão com o banco de dados
AppDataSource.initialize()
    .then(() => {
        console.log('Conectado ao SQL Server com sucesso!');

        // Definir as rotas
        app.use('/api', clientRoutes);

        // Iniciar o servidor
        app.listen(process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });
