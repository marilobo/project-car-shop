import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';
import { CREATED, INTERNAL_SERVER_ERROR,
  NOT_FOUND, OK, UNPROCESSABLE_CONTENT } from '../Utils/httpStatusCode';

class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async createCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(CREATED).json(newCar);
    } catch (error) {
      return this.res.status(INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(OK).json(cars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getCarById(id);
      if (!car) {
        return this.res.status(NOT_FOUND).json({ message: 'Car not found' });
      }
      return this.res.status(OK).json(car);
    } catch (_error) {
      return this.res.status(UNPROCESSABLE_CONTENT).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarController;
