import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}

export default Car;
