import { Router } from 'express';
import drinksRouter from './drinks.routes';

const routes = Router();

routes.use('/drinks', drinksRouter);

export default routes;
