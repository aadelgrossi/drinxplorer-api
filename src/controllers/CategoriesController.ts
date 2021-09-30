import { Request, Response } from 'express';
import {
  serializeCategory,
  serializeDrinksByCategory,
  DrinkByCategoryRawRawResponse,
} from '../serializers';
import { api } from '../services';

export class CategoriesController {
  public async list(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/list.php?c=list');

    const categories = serializeCategory(data);

    return response.json(categories);
  }

  public async drinks(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const { data } = await api.get<DrinkByCategoryRawRawResponse>(
      `/filter.php?c=${name}`,
    );

    const drinks = serializeDrinksByCategory(data);

    return response.json(drinks);
  }
}
