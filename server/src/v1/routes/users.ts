import { Router } from 'express';
import User from '../controllers/UserController'

const router = Router();

router.get('/get-all-users',  User.routes.get);
router.get('/get-payment-history/:id', User.routes.getPaymentHistory);
router.get('/get-user/:id', User.routes.getOne);
router.post('/login', User.routes.login);
router.post('/create-user',  User.routes.create);
router.put('/update-user/:id',  User.routes.update);
router.delete('/delete-user/:id',  User.routes.delete);

export default router;