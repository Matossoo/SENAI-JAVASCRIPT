//Importa o framework express
const express = require('express');
const connection = require('./db'); // Importa a conexão com o banco de dados
const server = express();

//Middleware que permite o servidor entender requisições com JSON no corpo (req.body)
server.use(express.json());


//===================================
//Método HTTP: GET
//LISTAR TODOS OS CURSOS
//localhost:3000/cursos
server.get('/cursos', (req, res) => {

   const sql = 'SELECT * FROM cursos'; // Consulta SQL para selecionar todos os cursos

   connection.query(sql, (erro, resultados) => {
       if (erro) {
           console.error('Erro ao consultar cursos:', erro);
           return res.status(500).json({ error: erro.message });
       }
       return res.json(resultados);
   });
});

//Método HTTP: GET
//LISTAR UM UNICO CURSO
//localhost:3000/curso/2
server.get('/cursos/:id', (req, res) => {

    const {id} = req.params; // Obtém o ID do curso a partir da URL

    const sql = 'SELECT * FROM cursos WHERE id = ?'; // Consulta SQL para selecionar um curso específico
    
    connection.query(sql, [id], (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ error: erro.message });
        }
        return res.json(resultados[0]); // Retorna o primeiro resultado (único curso)
});

//Método HTTP: POST
//CRIAR UM NOVO CURSO
//localhost:3000/cursos
//{ "name": "Curso de Python" }
server.post('/cursos', (req, res)=> {

    // Desestrutura a propriedade "name" enviada no corpo da requisição
    const nome = req.body.nome;

    // Adiciona o novo curso ao array de cursos
    cursos.push(nome);

    // Retorna a lista atualizada de cursos
    return res.json(cursos);    
});

//Método HTTP: PUT
//ATUALIZAR UM CURSO
//localhost:3000/cursos/0
server.put('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser atualizado pela URL
    const id = req.params.id;

    // Obtém o novo nome do curso enviado no corpo da requisição
    const nome = req.body.nome;

    // Atualiza o curso no índice informado
    cursos[id] = nome;

    // Retorna a lista de cursos atualizada
    return res.json(cursos);

});

//Método HTTP: DELETE
//DELETAR UM CURSO
//localhost:3000/cursos/1
server.delete('/cursos/:id', (req, res) => {

    // Obtém o índice do curso a ser removido
    const id = req.params.id;

    // Remove 1 elemento do array a partir do índice informado
    cursos.splice(id, 1);

    // Retorna a lista de cursos após a exclusão
    return res.json(cursos);
});



//O metodo listen() faz o servidor começar a escutar
// requisiçoes em uma determinada porta.
server.listen(3023 , () => {
    console.log("Servidor rodando na porta 3002");
});