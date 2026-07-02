const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

/* ==========================
1. Listar todos
========================== */

app.get("/destinos", (req, res) => {

    db.query("SELECT * FROM destinos", (erro, resultado) => {

        if (erro) {
            return res.status(500).json({erro: erro});
        }

        res.json(resultado);

    });

});

/* ==========================
2. Buscar por ID
========================== */

app.get("/destinos/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "SELECT * FROM destinos WHERE id = ?",
        [id],
        (erro, resultado) => {

            if (erro)
                return res.status(500).json({erro});

            res.json(resultado);

        }
    );

});

/* ==========================
3. Cadastrar
========================== */

app.post("/destinos", (req, res) => {

    const {nome, pais} = req.body;

    db.query(
        "INSERT INTO destinos(nome,pais) VALUES (?,?)",
        [nome, pais],
        (erro, resultado) => {

            if (erro)
                return res.status(500).json({erro});

            res.json({
                mensagem: "Destino cadastrado com sucesso",
                id: resultado.insertId
            });

        }
    );

});

/* ==========================
4. Atualizar
========================== */

app.put("/destinos/:id", (req, res) => {

    const id = req.params.id;

    const {nome, pais} = req.body;

    db.query(
        "UPDATE destinos SET nome=?, pais=? WHERE id=?",
        [nome, pais, id],
        (erro) => {

            if (erro)
                return res.status(500).json({erro});

            res.json({
                mensagem: "Destino atualizado com sucesso"
            });

        }
    );

});

/* ==========================
5. Excluir
========================== */

app.delete("/destinos/:id", (req, res) => {

    const id = req.params.id;

    db.query(
        "DELETE FROM destinos WHERE id=?",
        [id],
        (erro) => {

            if (erro)
                return res.status(500).json({erro});

            res.json({
                mensagem: "Destino excluído com sucesso"
            });

        }
    );

});

/* ==========================
6. Buscar por País
========================== */

app.get("/pais/:pais", (req, res) => {

    const pais = req.params.pais;

    db.query(
        "SELECT * FROM destinos WHERE pais=?",
        [pais],
        (erro, resultado) => {

            if (erro)
                return res.status(500).json({erro});

            res.json(resultado);

        }
    );

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});