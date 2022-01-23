import { Router } from 'express';

import subscribers from './routes/subscribers';

const router = Router();

router.use('/subscribers', subscribers);

export default router;