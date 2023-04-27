import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleService from '../Services/MotorcycleService';
import { CREATED, INTERNAL_SERVER_ERROR, OK,
  NOT_FOUND, UNPROCESSABLE_CONTENT } from '../Utils/httpStatusCode';

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

  public async getMotoById() {
    const { id } = this.req.params;
    try {
      const moto = await this.service.getMotoById(id);
      if (!moto) {
        return this.res.status(NOT_FOUND).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(OK).json(moto);
    } catch (_error) {
      return this.res.status(UNPROCESSABLE_CONTENT).json({ message: 'Invalid mongo id' });
    }
  }

  public async updateMotoById() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const moto = await this.service.updateMotoById(id, body);
      if (!moto) {
        return this.res.status(NOT_FOUND).json({ message: 'Motorcycle not found' });
      }
      const updatedMoto = await this.service.updateMotoById(id, body);
      return this.res.status(OK).json(updatedMoto);
    } catch (_error) {
      return this.res.status(UNPROCESSABLE_CONTENT).json({ message: 'Invalid mongo id' });
    }
  }
}

export default MotorcycleController;
