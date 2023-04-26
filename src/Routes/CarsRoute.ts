import { Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => new CarController(req, res).createCar(),
);

export default router;
