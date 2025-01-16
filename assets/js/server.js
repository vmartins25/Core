const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'br-asc-web1314.main-hosting.eu',
    user: 'u527970914_valencar85',
    password: 'Mm050218',
    database: 'u527970914_master'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados');
});

// Rota para buscar todos os produtos da tabela CardProdutos
app.get('/produtos', (req, res) => {
    const query = 'SELECT * FROM CardProdutos';
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos: ', err);
            res.status(500).send('Erro ao buscar produtos');
            return;
        }
        
        res.json(results); // Envia os dados como resposta em JSON
    });
});

// Configurando o servidor para rodar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


