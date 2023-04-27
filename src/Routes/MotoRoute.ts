import { Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => new MotorcycleController(req, res).createMoto(),
);

router.get(
  '/',
  (req: Request, res: Response) => new MotorcycleController(req, res).getAllMotorcycles(),
);

router.get(
  '/:id',
  (req: Request, res: Response) => new MotorcycleController(req, res).getMotoById(),
);

router.put(
  '/:id',
  (req: Request, res: Response) => new MotorcycleController(req, res).updateMotoById(),
);

export default router;
