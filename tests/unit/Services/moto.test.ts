import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validMotorcycleWithStatus,
  motorcyclesArray, updatedMotorcycle } from '../../mock/motorcycle.mock';
import MotorCycleService from '../../../src/Services/MotorcycleService';

const service = new MotorCycleService();

describe('Testa a camada Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível criar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(validMotorcycleWithStatus);

    const createdMoto = await service.createMoto(validMotorcycleWithStatus);

    expect(createdMoto).to.be.deep.equal(validMotorcycleWithStatus);
  });

  it('Verifica se é possível listar todas as motos', async function () {
    sinon.stub(Model, 'find').resolves(motorcyclesArray);

    const arrayOfMotos = await service.getAllMotorcycles();

    expect(arrayOfMotos).to.be.deep.equal(motorcyclesArray);
  });

  it('Verifica se é possível retornar uma moto através da id', async function () {
    sinon.stub(Model, 'findById').resolves(validMotorcycleWithStatus);

    const moto = await service.getMotoById('26');

    expect(moto).to.be.deep.equal(validMotorcycleWithStatus);
  });

  it('Verifica se é possível atualizar as informações de uma moto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);

    const serviceUpdatedMoto = await service.updateMotoById('26', updatedMotorcycle);

    expect(serviceUpdatedMoto).to.be.deep.equal(updatedMotorcycle);
  });
});
