import { Router } from 'express';
import ContactUs from '../controllers/ContactUsController'

const router = Router();

router.post('/create-contact-us',  ContactUs.routes.create);

export default router;