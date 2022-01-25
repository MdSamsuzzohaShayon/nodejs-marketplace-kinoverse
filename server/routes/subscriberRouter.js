const subscriberController = require('../controllers/subscriber.controller.js');


const router = require('express').Router();




router.get('/', subscriberController.getAllSubscribers);
router.post('/add-subscriber', subscriberController.addSubscriber);












module.exports = router;