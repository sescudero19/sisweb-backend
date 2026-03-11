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
exports.deleteServicio = exports.updateServicio = exports.createServicio = exports.getServicioById = exports.getAllServicios = void 0;
const servicio_1 = require("../models/servicio");
// trae todos los servicios
const getAllServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicios = yield servicio_1.Servicio.findAll();
        return res.status(200).json({
            status: "success",
            message: "ok",
            payload: servicios
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal obteniendo los servicios",
            error
        });
    }
});
exports.getAllServicios = getAllServicios;
// busca por id
const getServicioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicio = yield servicio_1.Servicio.findByPk(Number(req.params.id));
        return res.status(200).json({
            status: "success",
            message: "ok",
            payload: servicio
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "no se encontro el servicio",
            error
        });
    }
});
exports.getServicioById = getServicioById;
// Crea nuevo servicio
const createServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El contenido no puede estar vacio",
            payload: null
        });
    }
    try {
        const servicio = yield servicio_1.Servicio.create(Object.assign({}, req.body));
        return res.status(200).json({
            status: "success",
            message: "creado",
            payload: servicio
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal creando el servicio",
            error
        });
    }
});
exports.createServicio = createServicio;
// actualiza los datos
const updateServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El contenido no puede estar vacio",
            payload: null
        });
    }
    try {
        const actualizado = yield servicio_1.Servicio.update(Object.assign({}, req.body), { where: { id_servicio: req.params.id } });
        return res.status(200).json({
            status: "success",
            message: "actualizado",
            payload: actualizado
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal actualizando",
            error
        });
    }
});
exports.updateServicio = updateServicio;
// borrar un servicio
const deleteServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield servicio_1.Servicio.destroy({ where: { id_servicio: id } });
        return res.status(200).json({
            status: "success",
            message: "eliminado"
        });
    }
    catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal eliminando",
            error
        });
    }
});
exports.deleteServicio = deleteServicio;
