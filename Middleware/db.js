const mysql = require('mysql2');

// Configuração da conexão com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Endereço do servidor
    user: 'root', // Nome do usuário
    password: 'root', // Senha
    database: 'escola' // Nome da base de dados
});

// Conecta ao banco de dados
connection.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Exporta a conexão para ser utilizada em outros arquivos
module.exports = connection;