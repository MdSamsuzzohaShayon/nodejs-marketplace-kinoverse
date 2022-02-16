const router = require('express').Router();
const { check } = require('express-validator');
const { login, registerStuff, getAllUsers, deleteUser, registerGeneral } = require('../controllers/user.controller.js');
const ensureAuth = require('../middleware/auth.js');


router.post('/register-stuff',
    // ensureAuth,
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').notEmpty().isLength({ min: 6 }),
    registerStuff);


router.post('/register-general',
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').notEmpty().isLength({ min: 6 }),
    registerGeneral);

router.delete('/delete/:userId', ensureAuth, deleteUser);

router.post('/login',
    check('email').notEmpty(),
    check('password').notEmpty().isLength({ min: 6 }),
    login);


router.get('/all', ensureAuth, getAllUsers);






module.exports = router;