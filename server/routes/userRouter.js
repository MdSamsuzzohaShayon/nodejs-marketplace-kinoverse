const router = require('express').Router();
const { check } = require('express-validator');
const { login, register, getAllUsers } = require('../controllers/user.controller.js');
const ensureAuth = require('../middleware/auth.js');


router.post('/register',
    check('name').notEmpty().isLength({ min: 2 }).withMessage("Your name should more than 2 charecter long."),
    check('email').isEmail(),
    check('password').notEmpty().isLength({ min: 6 }),
    check('role').notEmpty(),
    register);


router.post('/login',
    check('email').notEmpty(),
    check('password').notEmpty().isLength({ min: 6 }),
    login);


router.get('/all', ensureAuth, getAllUsers);


module.exports = router;