import { Request, Response } from 'express';
import { serializeIngredients, serializeFullIngredient } from '../serializers';
import { api } from '../services';

export class IngredientsController {
  public async list(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/list.php?i=list');

    const ingredients = serializeIngredients(data);

    return response.json(ingredients);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { data } = await api.get(`/lookup.php?iid=${id}`);

    if (!data.ingredients) {
      response.sendStatus(404);
    }

    const ingredient = serializeFullIngredient(data);

    return response.json(ingredient);
  }
}
