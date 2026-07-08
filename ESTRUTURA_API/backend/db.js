================================================
Arquivo: db.js
================================================
 

const mysql = require('mysql2');

const connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'escola'

});

connetion.connect((erro) => {
    if(erro){
        console.log('Erro ao conectar: ' , erro)
        return;
    }
    console.log('Banco Conectado com sucesso!');
})

//Serve para exportar a variavel connection
module.exports = connetion;

================================================
BANCO DE DADOS
================================================
 

CREATE DATABASE escola;
USE escola;

CREATE TABLE cursos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)NOT NULL
);


INSERT INTO cursos(nome)
VALUES
('Node JS'),
('JavaScript'),
('React Native');

select * from cursos;