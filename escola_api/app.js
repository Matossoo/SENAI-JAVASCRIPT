const express = require('express');
const server = express();

server.use(express.json());

const cursos = ['NodeJs', 'JavaScript', 'React Native'];

// Listar todos os cursos ou buscar por query
server.get('/cursos', (req, res) => {
    const nome = req.query.nome;

    if (nome) {
        return res.json({ curso: Curso de ${nome} });
    }

    return res.json(cursos);
});

// Buscar curso pelo índice
server.get('/cursos/:id', (req, res) => {
    const id = req.params.id;

    if (!cursos[id]) {
        return res.status(404).json({ erro: 'Curso não encontrado' });
    }

    return res.json(cursos[id]);
});

// Adicionar curso
server.post('/cursos', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: 'O campo nome é obrigatório'
        });
    }

    cursos.push(nome);

    return res.status(201).json(cursos);
});

server.put('/cursos/:id', (req, res) => {
    const id = req.params.id;
    const  nome  = req.body.nome;

    if (!nome) {
        return res.status(400).json({
            erro: 'O campo nome é obrigatório'
        });
    }

    if (!cursos[id]) {
        return res.status(404).json({ erro: 'Curso não encontrado' });
    }

    cursos[id] = nome;

    return res.json(cursos[id]);
});

server.listen(3040, () => {
    console.log('Servidor rodando na porta 3040');
});