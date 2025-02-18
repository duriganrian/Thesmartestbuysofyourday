import express, { Request, Response } from 'express';
import { Consultas } from './Consultas';

const router = express.Router();

router.get('/', (req: Request, res: Response) => { 
    res.send('Hello World!'); 
});

// 🔥 Rota protegida removida
router.get('/produtos', Consultas.todos);

export { router };
