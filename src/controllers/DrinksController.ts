import { Request, Response } from 'express';
import {
  serializeDrink,
  serializeDrinks,
  DrinkRawResponse,
} from '../serializers';
import { api } from '../services';

export class DrinksController {
  public async search(request: Request, response: Response): Promise<Response> {
    const {
      query: { name: s },
    } = request;

    const { data } = await api.get('/search.php?', { params: { s } });
    const drinks = serializeDrinks(data);

    return response.json(drinks);
  }

  public async random(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/random.php');
    const drink = serializeDrink(data);

    return response.json(drink);
  }

  public async show(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const { data } = await api.get<DrinkRawResponse>(`/lookup.php?i=${id}`);

    if (!data.drinks) {
      response.sendStatus(404);
    }

    const drink = serializeDrink(data);

    response.json(drink);
  }
}
