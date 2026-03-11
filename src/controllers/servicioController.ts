import { RequestHandler, Request, Response } from "express";
import { Servicio } from "../models/servicio";

// Obtener todos los servicios
export const getAllServicios: RequestHandler = async (req: Request, res: Response) => {
    try {
        const servicios: Array<Servicio> = await Servicio.findAll();
        return res.status(200).json({
            status: "success",
            message: "Servicios obtenidos correctamente",
            payload: servicios
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al obtener los servicios",
            error
        });
    }
};

// Obtener un servicio por id
export const getServicioById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const servicio = await Servicio.findByPk(Number(req.params.id));
        return res.status(200).json({
            status: "success",
            message: "Servicio obtenido correctamente",
            payload: servicio
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al obtener el servicio",
            error
        });
    }
};

// Crear un nuevo servicio
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
            message: "Servicio creado correctamente",
            payload: servicio
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al crear el servicio",
            error
        });
    }
};

// Actualizar un servicio
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
            message: "Servicio actualizado correctamente",
            payload: actualizado
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al actualizar el servicio",
            error
        });
    }
};

// Eliminar un servicio
export const deleteServicio: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
        await Servicio.destroy({ where: { id_servicio: id } });
        return res.status(200).json({
            status: "success",
            message: "Servicio eliminado correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error al eliminar el servicio",
            error
        });
    }
};