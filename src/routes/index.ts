import { Router } from 'express';
import drinksRouter from './drinks.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use('/drinks', drinksRouter);
routes.use('/categories', categoriesRouter);

export default routes;
