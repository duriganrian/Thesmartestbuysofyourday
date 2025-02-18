import { Request, Response } from 'express';
import { DatabaseModel } from './model/DatabaseModel';

const database = new DatabaseModel().pool;

export class Consultas {
    static async todos(req: Request, res: Response): Promise<void> {
        try {
            const result = await database.query(`SELECT * FROM produtos;`);
            res.json(result.rows);
        } catch (error: any) {
            console.error(`Erro ao buscar produtos:`, error.message);
            res.status(500).json({ error: "Erro ao buscar produtos", detalhes: error.message });
        }
    }
}
