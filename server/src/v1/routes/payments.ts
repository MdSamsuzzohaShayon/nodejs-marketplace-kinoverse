import { Router } from 'express';
import Payment from '../controllers/PaymentController'

const router = Router();

router.get('/get-all-payments',  Payment.routes.get);
router.get('/get-payment/:id', Payment.routes.getOne);
router.get('/get-payments-by-user/:id', Payment.routes.getByUserId);
router.post('/create-payment',  Payment.routes.create);
router.put('/update-payment/:id',  Payment.routes.update);
router.delete('/delete-payment/:id',  Payment.routes.delete);
router.put('/update-payment-status/:id',  Payment.routes.updateStatus);
router.post('/stripe/:id', Payment.routes.stripe);
router.post('/createIntent/:id', Payment.routes.stripeCreateIntent);
router.put('/updateStripe/:id', Payment.routes.updateStripe);
router.get('/intentStatus', Payment.routes.stripeIntentStatus);

export default router;