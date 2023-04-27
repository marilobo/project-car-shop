import { Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => new MotorcycleController(req, res).createMoto(),
);

export default router;
