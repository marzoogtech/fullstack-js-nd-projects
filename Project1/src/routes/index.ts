import { Router } from 'express';
import imgsRoute from './api/images';

const routes = Router();

routes.use('/api/images', imgsRoute);

export default routes;
