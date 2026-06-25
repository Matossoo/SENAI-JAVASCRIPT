// Importa a biblioteca Express
const express = require('express');

// Cria a aplicação
const app = express();

// Permite receber JSON no Body das requisições
app.use(express.json());

// Array em memória contendo alguns livros cadastrados
let livros = [
    { nome: "Dom Casmurro", autor: "Machado de Assis" },
    { nome: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
    { nome: "Harry Potter", autor: "J.K. Rowling" }
];

/*
====================================
GET - LISTAR TODOS OS LIVROS
====================================
*/

// Quando acessar /livros
app.get('/livros', (req, res) => {

    // Retorna todo o array de livros
    res.json(livros);
});

/*
====================================
GET - BUSCAR LIVRO POR ÍNDICE
====================================
*/

// :id é um Route Param
app.get('/livros/:id', (req, res) => {

    // Captura o índice enviado pela URL
    const id = req.params.id;

    // Retorna apenas o livro correspondente
    res.json(livros[id]);
});

/*
====================================
GET - PESQUISAR LIVRO POR NOME
====================================
*/

// Exemplo:
// /pesquisar?nome=harry
app.get('/pesquisar', (req, res) => {

    // Captura o Query Param
    const nome = req.query.nome;

    // Filtra os livros encontrados
    const resultado = livros.filter(livro =>
        livro.nome.toLowerCase().includes(nome.toLowerCase())
    );

    // Retorna os resultados
    res.json(resultado);
});

/*
====================================
POST - CADASTRAR LIVRO
====================================
*/

app.post('/livros', (req, res) => {

    // Recebe os dados enviados no Body
    const novoLivro = req.body;

    // Adiciona ao array
    livros.push(novoLivro);

    // Retorna mensagem de sucesso
    res.json({
        mensagem: "Livro cadastrado com sucesso!",
        livro: novoLivro
    });
});

/*
====================================
PUT - ATUALIZAR LIVRO
====================================
*/

app.put('/livros/:id', (req, res) => {

    // Captura o índice enviado pela URL
    const id = req.params.id;

    // Captura os dados enviados no Body
    const dados = req.body;

    // Atualiza o livro
    livros[id] = dados;

    // Retorna o livro atualizado
    res.json({
        mensagem: "Livro atualizado com sucesso!",
        livro: livros[id]
    });
});

/*
====================================
DELETE - REMOVER LIVRO
====================================
*/

app.delete('/livros/:id', (req, res) => {

    // Captura o índice enviado pela URL
    const id = req.params.id;

    // Remove o livro do array
    livros.splice(id, 1);

    // Retorna mensagem de sucesso
    res.json({
        mensagem: "Livro removido com sucesso!"
    });
});

/*
====================================
INICIAR SERVIDOR
====================================
*/

// Inicia o servidor na porta 3000
app.listen(3000, () => {

    // Mensagem exibida no terminal
    console.log('Servidor rodando na porta 3000');
});


