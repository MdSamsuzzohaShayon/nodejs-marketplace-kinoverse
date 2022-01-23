import { Router } from 'express';

import users from './routes/users';
import movies from './routes/movies';
import payments from './routes/payments';
import servicesorders from './routes/servicesorders'
import servicepayments from './routes/servicepayments';
import services from './routes/services';
import contactUs from './routes/contactus';

const router = Router();

router.use('/users', users);
router.use('/movies', movies);
router.use('/payments', payments);
router.use('/contact-us', contactUs);
router.use('/servicesorders', servicesorders);
router.use('/servicepayments', servicepayments);
router.use('/services', services);


export default router;