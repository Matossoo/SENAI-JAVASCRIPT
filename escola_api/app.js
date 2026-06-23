const express = require('express');
const server = express();

const cursos = ['Node.js', 'JavaScript', 'React', 'React Native'];

server.get('/curso', (req, res) => {
    const nome = req.query.nome
    return res.json({ curso: `Aprendendo ${nome}` });
    
});

server.get('/curso/:id', (req, res) => {
    const id = req.params.id
    return res.json( cursos[id] );
});


//========================================================

//método HTTP: GET
//listar todos os cursos
//localhost:3055/cursos

server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//node.js
//localhost:3055/cursos?nome=Node.js

server.listen(3055, () => {
    console.log('Servidor rodando na porta 3055');
});
