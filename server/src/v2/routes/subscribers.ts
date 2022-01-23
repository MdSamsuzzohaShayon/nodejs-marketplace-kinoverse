import { Router } from 'express';
import Subscriber from '../controllers/SubscriberController'

const router = Router();

router.get('/',  Subscriber.routes.get);
router.get('/export',  Subscriber.routes.export);
router.post('/create',  Subscriber.routes.create);

export default router;