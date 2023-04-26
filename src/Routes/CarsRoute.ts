import { Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => new CarController(req, res).createCar(),
);

router.get(
  '/',
  (req: Request, res: Response) => new CarController(req, res).getAllCars(),
);

router.get(
  '/:id',
  (req: Request, res: Response) => new CarController(req, res).getCarById(),
);

export default router;
