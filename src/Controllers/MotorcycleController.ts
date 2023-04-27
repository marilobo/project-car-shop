import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleService from '../Services/MotorcycleService';
import { CREATED, INTERNAL_SERVER_ERROR, OK } from '../Utils/httpStatusCode';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private service: MotorCycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorCycleService();
  }

  public async createMoto() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.createMoto(motorcycle);
      return this.res.status(CREATED).json(newMoto);
    } catch (error) {
      return this.res.status(INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllMotorcycles() {
    const motos = await this.service.getAllMotorcycles();
    return this.res.status(OK).json(motos);
  }
}

export default MotorcycleController;
