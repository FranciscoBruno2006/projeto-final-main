const express = require("express");
const Database = require("better-sqlite3");

const app = express();
app.use(express.json());

const db = new Database("database.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT,
        senha TEXT
    )
`).run();

const count = db.prepare("SELECT COUNT(*) as total FROM usuarios").get().total;
if (count === 0) {
    const insert = db.prepare("INSERT INTO usuarios (username, email, senha) VALUES (?, ?, ?)");
    insert.run("admin", "admin@gamil.com", "asdfghjkl");
    insert.run("usuario", "usuario@gmail.com", "qwertyuiop");
}

app.post("/api/login", (req, res) => {
    const { username, senha } = req.body;

    let query = `
        SELECT id, username, email FROM usuarios 
        WHERE (username = ? OR email = ?) AND senha = ?
    `;
    let encontrado = db.prepare(query).get(username, username, senha);

    if (!encontrado) {
        const insert = db.prepare(`
            INSERT INTO usuarios (username, email, senha) 
            VALUES (?, ?, ?)
        `);
        
        const emailFicticio = `${username}@email.com`;
        
        
        try {
            const info = insert.run(username, emailFicticio, senha);
            encontrado = {
                id: info.lastInsertRowid,
                username: username,
                email: emailFicticio,
            };
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "Senha incorreta para este usuário."
            });
        }
    }

    res.json({
        success: true,
        message: "Login realizado com sucesso!",
        user: encontrado
    });
});

app.put("/api/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { novoUsername } = req.body;

    try {
        db.prepare("UPDATE usuarios SET username = ? WHERE id = ?").run(novoUsername, id);
        const user = db.prepare("SELECT id, username, email FROM usuarios WHERE id = ?").get(id);
        res.json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false });
    }
});

app.delete("/api/usuarios/:id", (req, res) => {
    const { id } = req.params;

    try {
        db.prepare("DELETE FROM usuarios WHERE id = ?").run(id);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

app.listen(5000, () => {
    console.log("Servidor rodando em http://localhost:5000");
});