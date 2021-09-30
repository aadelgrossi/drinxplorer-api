import { CategoriesController } from '../controllers';
import { Router } from 'express';

const categoriesController = new CategoriesController();

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.list);
categoriesRouter.get('/:name/drinks', categoriesController.drinks);

export default categoriesRouter;
