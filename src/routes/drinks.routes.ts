import DrinksController from '../controllers/DrinksController';
import { Router } from 'express';

const drinksController = new DrinksController();

const drinksRouter = Router();

drinksRouter.get('/search', drinksController.search);
drinksRouter.get('/random', drinksController.random);

export default drinksRouter;
