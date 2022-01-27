const { addToWaitlist, getAllSubscribers, addSubscriber } = require('../controllers/subscriber.controller.js');
const { body, check } = require('express-validator');
const upload = require('../config/s3-config');


const router = require('express').Router();




router.get('/all', getAllSubscribers);


router.post('/add-subscriber',
    body('email').isEmail(),
    addSubscriber);

router.put('/add-to-waitlist',
    upload,
    check('email').isEmail(),
    check('name').notEmpty().isLength({ min: 2 }).withMessage("Your name should more than 2 charecter long."),
    addToWaitlist);












module.exports = router;