import { RequestHandler, Request, Response } from "express";
import { Servicio } from "../models/servicio";

// trae todos los servicios
export const getAllServicios: RequestHandler = async (req: Request, res: Response) => {
    try {
        const servicios: Array<Servicio> = await Servicio.findAll();
        return res.status(200).json({
            status: "success",
            message: "ok",
            payload: servicios
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal obteniendo los servicios",
            error
        });
    }
};

// busca por id
export const getServicioById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const servicio = await Servicio.findByPk(Number(req.params.id));
        return res.status(200).json({
            status: "success",
            message: "ok",
            payload: servicio
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "no se encontro el servicio",
            error
        });
    }
};

// Crea nuevo servicio
export const createServicio: RequestHandler = async (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El contenido no puede estar vacio",
            payload: null
        });
    }
    try {
        const servicio = await Servicio.create({ ...req.body });
        return res.status(200).json({
            status: "success",
            message: "creado",
            payload: servicio
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal creando el servicio",
            error
        });
    }
};

// actualiza los datos
export const updateServicio: RequestHandler = async (req: Request, res: Response) => {
    if (!req.body) {
        return res.status(400).json({
            status: "error",
            message: "El contenido no puede estar vacio",
            payload: null
        });
    }
    try {
        const actualizado = await Servicio.update({ ...req.body }, { where: { id_servicio: req.params.id } });
        return res.status(200).json({
            status: "success",
            message: "actualizado",
            payload: actualizado
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal actualizando",
            error
        });
    }
};

// borrar un servicio
export const deleteServicio: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await Servicio.destroy({ where: { id_servicio: id } });
        return res.status(200).json({
            status: "success",
            message: "eliminado"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "algo salio mal eliminando",
            error
        });
    }
};
