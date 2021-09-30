import { CategoriesController } from '../controllers';
import { Router } from 'express';

const categoriesController = new CategoriesController();

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.list);

export default categoriesRouter;
