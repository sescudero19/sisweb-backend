import { Router } from 'express';
import { getAllServicios, getServicioById, createServicio, updateServicio, deleteServicio } from '../controllers/servicioController';

const servicioRouter: Router = Router();

servicioRouter.get('/', getAllServicios);

servicioRouter.get('/:id', getServicioById);

servicioRouter.post('/', createServicio);

servicioRouter.patch('/:id', updateServicio);

servicioRouter.delete('/', deleteServicio);

export default servicioRouter;