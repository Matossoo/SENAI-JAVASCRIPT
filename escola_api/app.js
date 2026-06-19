const express = require('express');
const app = express();
const port = 3001;

app.get('/aluno', (req, res) => {
    res.send(
        "nome: João da Silva, idade: 20, curso: Engenharia de Software"
    );
});

app.get('/professor', (req, res) => {
    res.send(
        "nome: Maria Oliveira, idade: 35, disciplina: Matemática"
    );
});

app.get('/escola', (req, res) => {
    res.send(
        "nome: Escola Estadual de Ensino Médio, endereço: Rua das Flores, 123"
    );
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});