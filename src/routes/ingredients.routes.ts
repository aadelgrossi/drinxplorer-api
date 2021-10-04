import { IngredientsController } from '../controllers';
import { Router } from 'express';

const ingredientsController = new IngredientsController();

const ingredientsRouter = Router();

ingredientsRouter.get('/', ingredientsController.list);
ingredientsRouter.get('/:id', ingredientsController.show);

export default ingredientsRouter;
