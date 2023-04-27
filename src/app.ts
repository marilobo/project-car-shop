import express from 'express';
import carRoutes from './Routes/CarsRoute';
import MotoRoute from './Routes/MotoRoute';

const app = express();

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/motorcycles', MotoRoute);

export default app;
