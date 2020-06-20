import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://192.168.0.14:3002/uploads/${item.image}`,
    };
  });

  return  response.json(serializedItems); //sempre tem q ter return aqui na frente do response p nao seguir rodando, parar aqui e n continuar
}
}

export default ItemsController;
