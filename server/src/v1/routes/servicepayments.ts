import { Router } from 'express';
import ServicePayment from '../controllers/ServicePaymentsController'

const router = Router();

router.get('/get-all-servicepayments',  ServicePayment.routes.get);
router.get('/get-servicepayment/:id', ServicePayment.routes.getOne);
router.post('/create-servicepayment',  ServicePayment.routes.create);
router.put('/update-servicepayment/:id',  ServicePayment.routes.update);
router.delete('/delete-servicepayment/:id',  ServicePayment.routes.delete);

export default router;