const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// ==========================================
// DESTINOS
// ==========================================

// Listar todos
app.get("/destinos", (req, res) => {
    db.query("SELECT * FROM destinos", (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });
        res.json(resultado);
    });
});

// Buscar por ID
app.get("/destinos/:id", (req, res) => {
    db.query(
        "SELECT * FROM destinos WHERE id = ?",
        [req.params.id],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            if (resultado.length === 0)
                return res.status(404).json({ mensagem: "Destino não encontrado." });

            res.json(resultado[0]);
        }
    );
});

// Cadastrar
app.post("/destinos", (req, res) => {
    const { nome, pais } = req.body;

    db.query(
        "INSERT INTO destinos (nome, pais) VALUES (?, ?)",
        [nome, pais],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Destino cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    );
});

// Atualizar
app.put("/destinos/:id", (req, res) => {
    const { nome, pais } = req.body;

    db.query(
        "UPDATE destinos SET nome=?, pais=? WHERE id=?",
        [nome, pais, req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Destino atualizado com sucesso!"
            });
        }
    );
});

// Excluir
app.delete("/destinos/:id", (req, res) => {
    db.query(
        "DELETE FROM destinos WHERE id=?",
        [req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Destino excluído com sucesso!"
            });
        }
    );
});

// Buscar por país
app.get("/pais/:pais", (req, res) => {
    db.query(
        "SELECT * FROM destinos WHERE pais=?",
        [req.params.pais],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            res.json(resultado);
        }
    );
});

// ==========================================
// CLIENTES
// ==========================================

// Listar
app.get("/clientes", (req, res) => {
    db.query("SELECT * FROM clientes", (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });

        res.json(resultado);
    });
});

// Buscar por ID
app.get("/clientes/:id", (req, res) => {
    db.query(
        "SELECT * FROM clientes WHERE id=?",
        [req.params.id],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            if (resultado.length === 0)
                return res.status(404).json({ mensagem: "Cliente não encontrado." });

            res.json(resultado[0]);
        }
    );
});

// Cadastrar
app.post("/clientes", (req, res) => {
    const { nome, email, telefone } = req.body;

    db.query(
        "INSERT INTO clientes(nome,email,telefone) VALUES (?,?,?)",
        [nome, email, telefone],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Cliente cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    );
});

// Atualizar
app.put("/clientes/:id", (req, res) => {
    const { nome, email, telefone } = req.body;

    db.query(
        "UPDATE clientes SET nome=?, email=?, telefone=? WHERE id=?",
        [nome, email, telefone, req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Cliente atualizado com sucesso!"
            });
        }
    );
});

// Excluir
app.delete("/clientes/:id", (req, res) => {
    db.query(
        "DELETE FROM clientes WHERE id=?",
        [req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Cliente excluído com sucesso!"
            });
        }
    );
});

// ==========================================
// RESERVAS
// ==========================================

// Listar
app.get("/reservas", (req, res) => {

    const sql = `
        SELECT
            reservas.id,
            clientes.nome AS cliente,
            destinos.nome AS destino,
            destinos.pais,
            reservas.data_viagem
        FROM reservas
        INNER JOIN clientes ON reservas.id_cliente = clientes.id
        INNER JOIN destinos ON reservas.id_destino = destinos.id
    `;

    db.query(sql, (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });

        res.json(resultado);
    });

});

// Buscar por ID
app.get("/reservas/:id", (req, res) => {

    const sql = `
        SELECT
            reservas.id,
            clientes.nome AS cliente,
            destinos.nome AS destino,
            destinos.pais,
            reservas.data_viagem
        FROM reservas
        INNER JOIN clientes ON reservas.id_cliente = clientes.id
        INNER JOIN destinos ON reservas.id_destino = destinos.id
        WHERE reservas.id=?
    `;

    db.query(sql, [req.params.id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });

        if (resultado.length === 0)
            return res.status(404).json({ mensagem: "Reserva não encontrada." });

        res.json(resultado[0]);
    });

});

// Cadastrar
app.post("/reservas", (req, res) => {

    const { id_cliente, id_destino, data_viagem } = req.body;

    db.query(
        "INSERT INTO reservas(id_cliente,id_destino,data_viagem) VALUES (?,?,?)",
        [id_cliente, id_destino, data_viagem],
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Reserva cadastrada com sucesso!",
                id: resultado.insertId
            });
        }
    );

});

// Atualizar
app.put("/reservas/:id", (req, res) => {

    const { id_cliente, id_destino, data_viagem } = req.body;

    db.query(
        "UPDATE reservas SET id_cliente=?, id_destino=?, data_viagem=? WHERE id=?",
        [id_cliente, id_destino, data_viagem, req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Reserva atualizada com sucesso!"
            });
        }
    );

});

// Excluir
app.delete("/reservas/:id", (req, res) => {

    db.query(
        "DELETE FROM reservas WHERE id=?",
        [req.params.id],
        (erro) => {
            if (erro) return res.status(500).json({ erro });

            res.json({
                mensagem: "Reserva excluída com sucesso!"
            });
        }
    );

});

// ==========================================
// CONSULTAS
// ==========================================

// Reservas por cliente
app.get("/clientes/:id/reservas", (req, res) => {

    const sql = `
        SELECT
            reservas.id,
            destinos.nome AS destino,
            destinos.pais,
            reservas.data_viagem
        FROM reservas
        INNER JOIN destinos
        ON reservas.id_destino = destinos.id
        WHERE reservas.id_cliente = ?
    `;

    db.query(sql, [req.params.id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });

        res.json(resultado);
    });

});

// Reservas por destino
app.get("/destinos/:id/reservas", (req, res) => {

    const sql = `
        SELECT
            reservas.id,
            clientes.nome AS cliente,
            clientes.email,
            reservas.data_viagem
        FROM reservas
        INNER JOIN clientes
        ON reservas.id_cliente = clientes.id
        WHERE reservas.id_destino = ?
    `;

    db.query(sql, [req.params.id], (erro, resultado) => {
        if (erro) return res.status(500).json({ erro });

        res.json(resultado);
    });

});

// Clientes em ordem alfabética
app.get("/clientes-ordenados", (req, res) => {

    db.query(
        "SELECT * FROM clientes ORDER BY nome ASC",
        (erro, resultado) => {
            if (erro) return res.status(500).json({ erro });

            res.json(resultado);
        }
    );

});

// ==========================================

app.listen(3023, () => {
    console.log("Servidor rodando em http://localhost:3023");
});