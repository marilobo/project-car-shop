import ICar from '../../src/Interfaces/ICar';

export const validCarWithStatus: ICar = {
  id: '26',
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: true,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const updatedCar: ICar = {
  id: '26',
  model: 'Uno da Escada',
  year: 1979,
  color: 'Red',
  status: true,
  buyValue: 3500,
  doorsQty: 2,
  seatsQty: 4,
};

export const carsArray: ICar[] = [
  {
    id: '12',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '21',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const returnedCarsArray: ICar[] = [
  {
    id: '12',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '21',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];
