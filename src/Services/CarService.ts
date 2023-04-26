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

  public async createCar(car: ICar) {
    const newCarModel = new CarODM();
    const createdNewCar = await newCarModel.create(car);
    return this.createCarDomain(createdNewCar);
  }
}

export default CarService;
