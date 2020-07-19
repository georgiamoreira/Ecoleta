import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsList {
  async index(request: Request, response: Response) {
  const points = await knex('points').select('*');

  const serializedPoints = points.map(point => {
    return {
      ...point,
    };
  });

  return  response.json(serializedPoints); //sempre tem q ter return aqui na frente do response p nao seguir rodando, parar aqui e n continuar
}
}

export default PointsList;