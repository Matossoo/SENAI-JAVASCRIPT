const express = require('express');

const app = express();

app.get('/aluno', (req, res) => {
    res.json({
        nome: "Maria",
        curso: "Desenvolvimento de Sistemas"
    });
});

app.get('/professor', (req, res) => {
    res.json({
        nome: "Carlos",
        disciplina: "Node.js"
    });
});

app.get('/escola', (req, res) => {
    res.json({
        nome: "Tech School",
        cidade: "Joinville"
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});