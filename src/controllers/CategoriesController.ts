import { Request, Response } from 'express';
import { api } from '../services';

export class CategoriesController {
  public async list(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/list.php?c=list');

    const categories = data.drinks.map(category => ({
      name: category.strCategory,
    }));

    return response.json(categories);
  }
}
