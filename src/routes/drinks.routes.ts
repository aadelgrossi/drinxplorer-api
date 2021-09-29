import { DrinksController } from '../controllers';
import { Router } from 'express';

const drinksController = new DrinksController();

const drinksRouter = Router();

drinksRouter.get('/search', drinksController.search);
drinksRouter.get('/random', drinksController.random);
drinksRouter.get('/:id', drinksController.show);

export default drinksRouter;
