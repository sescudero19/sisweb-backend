import { Sequelize } from "sequelize-typescript";
import { Servicio } from "../models/servicio";

const connection = new Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'admin123',
    host: 'localhost',
    port: 5432,
    models: [Servicio]
});

async function connectionDB() {
    try {
        await connection.authenticate();
        console.log("Conexion exitosa a la base de datos.");
        await connection.sync();
    } catch (e) {
        console.log("Error al conectar con la base de datos:", e);
    }
}

export default connectionDB;