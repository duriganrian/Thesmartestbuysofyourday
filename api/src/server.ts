import express from 'express';
import cors from 'cors';
import { router } from './router'; // Supondo que este seja o arquivo de rotas

const server = express();

server.use(express.json());

// Adicione esta configuração CORS corretamente
server.use(cors({
    origin: "*", // Permite qualquer domínio acessar a API
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"] // Cabeçalhos permitidos
}));

server.use(router);

export { server };
