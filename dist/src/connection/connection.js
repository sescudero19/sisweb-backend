"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const servicio_1 = require("../models/servicio");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'admin123',
    host: 'localhost',
    port: 5432,
    models: [servicio_1.Servicio]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate();
            console.log("Conexion exitosa a la base de datos.");
            yield connection.sync();
        }
        catch (e) {
            console.log("Error al conectar con la base de datos:", e);
        }
    });
}
exports.default = connectionDB;
