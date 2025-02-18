import express from "express";

console.log("Iniciando o servidor...");

const app = express();
const PORT = process.env.PORT || 3333; // Usa a porta do ambiente ou 3333

// Middleware para JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});

// ✅ Adicionando a rota /produtos
app.get("/produtos", (req, res) => {
    const produtos = [
        { id: 1, nome: "Produto 1", preco: 100 },
        { id: 2, nome: "Produto 2", preco: 200 },
    ];
    res.json(produtos);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
