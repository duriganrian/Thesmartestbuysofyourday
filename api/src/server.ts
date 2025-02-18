import express from 'express';
import cors from 'cors';
import { router } from './router'; // 

const server = express();

server.use(express.json());
server.use(cors({
    origin: "https://thesmartestbuysofyourday.com", // Permite requisições apenas deste domínio
    methods: ["GET", "POST", "PUT", "DELETE"], // Permite esses métodos
    allowedHeaders: ["Content-Type", "Authorization"] // Permite esses cabeçalhos
}));

server.use(router);

export { server };
