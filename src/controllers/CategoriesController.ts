import { Request, Response } from 'express';
import { serializeCategory } from '../serializers/categories';
import { api } from '../services';

export class CategoriesController {
  public async list(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/list.php?c=list');

    const categories = serializeCategory(data);

    return response.json(categories);
  }
}
