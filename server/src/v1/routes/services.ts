import { Router } from 'express';
import Service from '../controllers/ServiceController'

const router = Router();

router.get('/get-all-services',  Service.routes.get);
router.get('/get-service/:id', Service.routes.getOne);
router.post('/create-service',  Service.routes.create);
router.put('/update-service/:id',  Service.routes.update);
router.delete('/delete-service/:id',  Service.routes.delete);

export default router;