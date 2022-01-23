import { Router } from 'express';
import ServiceOrder from '../controllers/ServiceOrdercontroler'

const router = Router();

router.get('/get-all-servicesorders',  ServiceOrder.routes.get);
router.get('/get-servicesorders/:id', ServiceOrder.routes.getOne);
router.get('/get-servicesorders-by-user/:id', ServiceOrder.routes.getByUserId);
router.post('/create-servicesorders',  ServiceOrder.routes.create);
router.put('/update-servicesorders/:id',  ServiceOrder.routes.update);
router.delete('/delete-servicesorders/:id',  ServiceOrder.routes.delete);

export default router;