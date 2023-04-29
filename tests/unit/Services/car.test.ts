import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { validCarWithStatus, carsArray, returnedCarsArray, updatedCar } from '../../mock/cars.mock';
import CarService from '../../../src/Services/CarService';

const service = new CarService();

describe('Testa a camada Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se é possível criar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(validCarWithStatus);

    const createdCar = await service.createCar(validCarWithStatus);

    expect(createdCar).to.be.deep.equal(validCarWithStatus);
  });

  it('Verifica se é possível listar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(carsArray);

    const arrayOfCars = await service.getAllCars();

    expect(arrayOfCars).to.be.deep.equal(returnedCarsArray);
  });

  it('Verifica se é possível retornar um carro através da id', async function () {
    sinon.stub(Model, 'findById').resolves(validCarWithStatus);

    const car = await service.getCarById('26');

    expect(car).to.be.deep.equal(validCarWithStatus);
  });

  it('Verifica se é possível atualizar as informações de um carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);

    const serviceUpdatedCar = await service.updateCarById('26', updatedCar);

    expect(serviceUpdatedCar).to.be.deep.equal(updatedCar);
  });
});
