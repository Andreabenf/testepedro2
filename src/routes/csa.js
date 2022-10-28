import { Router } from 'express';

import * as csaController from '@/controllers/csa';

const router = Router();

router.route('/')
  .get(csaController.getCsas)
  .post(csaController.createCsa);

export default router;
