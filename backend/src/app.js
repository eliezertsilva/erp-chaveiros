const express = require('express');
const cors = require('cors');
const { createConnection } = require('typeorm');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

createConnection().then(() => {
    console.log('Conectado ao SQL Server com sucesso!');

    app.get('/', (req, res) => {
        res.send('API ERP Chaveiros funcionando!');
    });

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(error => console.log('Erro ao conectar ao banco de dados:', error));
