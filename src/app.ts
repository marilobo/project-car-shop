import express from 'express';
import carRoutes from './Routes/CarsRoute';

const app = express();

app.use(express.json());

app.use('/cars', carRoutes);

export default app;
