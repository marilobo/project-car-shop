import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  private newCarModel = new CarODM();
  public async createCar(car: ICar) {
    const createdNewCar = await this.newCarModel.create(car);
    return this.createCarDomain(createdNewCar);
  }

  public async getAllCars() {
    const cars = await this.newCarModel.getAll();
    return cars.map((car) => new Car(car));
  }

  public async getCarById(id: string) {
    const car = await this.newCarModel.getById(id);
    if (!car) {
      return null;
    }
    return new Car(car);
  }
}

export default CarService;
