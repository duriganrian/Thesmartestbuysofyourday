import express from "express";

console.log("Iniciando o servidor...");


const app = express();
const PORT = 3334;

app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
