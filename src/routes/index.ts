import { Router } from 'express';
import drinksRouter from './drinks.routes';
import categoriesRouter from './categories.routes';
import ingredientsRouter from './ingredients.routes';

const routes = Router();

routes.use('/drinks', drinksRouter);
routes.use('/categories', categoriesRouter);
routes.use('/ingredients', ingredientsRouter);

export default routes;
