const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "agencia_viagens"
});

conexao.connect((erro) => {
    if (erro) {
        console.log("Erro ao conectar:", erro);
    } else {
        console.log("Conectado ao MySQL!");
    }
});

module.exports = conexao;