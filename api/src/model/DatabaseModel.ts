
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export class DatabaseModel {
    private _config: pg.PoolConfig;
    private _pool: pg.Pool;

    constructor() {
        this._config = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT as string),
            max: 10,
            idleTimeoutMillis: 10000
        };

        this._pool = new pg.Pool(this._config);
    }

    public async testeConexao(): Promise<string> {
        try {
            const client = await this._pool.connect();
            client.release();
            return "Conexão com o banco de dados bem-sucedida!";
        } catch (error) {
            console.error("Erro ao conectar ao banco de dados:", error);
            throw new Error("Falha na conexão com o banco de dados. Verifique suas credenciais.");
        }
    }

    public get pool() {
        return this._pool;
    }
}
