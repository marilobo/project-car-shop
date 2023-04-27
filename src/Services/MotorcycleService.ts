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

  public async getAllMotorcycles() {
    const motos = await this.newMotorcycleModel.getAll();
    return motos.map((moto) => new Motorcycle(moto));
  }

  public async getMotoById(id: string) {
    const moto = await this.newMotorcycleModel.getById(id);
    if (!moto) {
      return null;
    }
    return new Motorcycle(moto);
  }
}

export default MotorCycleService;
