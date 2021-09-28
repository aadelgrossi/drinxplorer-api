import { Request, Response } from 'express';
import { api } from '../services';

export default class DrinksController {
  public async search(request: Request, response: Response): Promise<Response> {
    const {
      query: { name: s },
    } = request;

    const { data } = await api.get('/search.php?', { params: { s } });

    return response.json(data);
  }

  public async random(_: Request, response: Response): Promise<Response> {
    const { data } = await api.get('/random.php');

    return response.json(data);
  }
}
