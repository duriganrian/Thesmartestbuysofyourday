import express from 'express';
import cors from 'cors';
import { router } from './router'; // Confirme se esse é o arquivo correto

const server = express();

server.use(express.json());

// Permitir todas as origens (CORREÇÃO AQUI)
server.use(cors({
    origin: "*", // Permite que qualquer domínio acesse a API
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"] // Cabeçalhos permitidos
}));

server.use(router);

export { server };
