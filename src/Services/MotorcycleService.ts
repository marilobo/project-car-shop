import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorCycleService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  private newMotorcycleModel = new MotorcycleODM();
  public async createMoto(moto: IMotorcycle) {
    const createdNewMoto = await this.newMotorcycleModel.create(moto);
    return this.createMotoDomain(createdNewMoto);
  }
}

export default MotorCycleService;
