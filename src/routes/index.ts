import { Router, Request, Response } from 'express';
import servicioRoutes from './servicioRoutes';

const apiRouter: Router = Router();

apiRouter.use('/servicio', servicioRoutes);

apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

export default apiRouter;