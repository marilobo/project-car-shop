import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(veiculo: T): Promise<T> {
    return this.model.create({ ...veiculo });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    if (!id) {
      return null;
    }
    return this.model.findById(id);
  }

  public async updateById(id: string, vehicle: Partial<T>): Promise<T | null> {
    const updatedVehicle = await this.model.findByIdAndUpdate({ _id: id }, { ...vehicle });
    return updatedVehicle;
  }
}

export default AbstractODM;
