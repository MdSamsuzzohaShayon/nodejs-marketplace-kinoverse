const router = require('express').Router();
const { check } = require('express-validator');
const { login, register, getAllUsers, deleteUser } = require('../controllers/user.controller.js');
const ensureAuth = require('../middleware/auth.js');


router.post('/register',
    ensureAuth,
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').notEmpty().isLength({ min: 6 }),
    check('role').notEmpty(),
    register);

router.delete('/delete/:userId', ensureAuth, deleteUser);

router.post('/login',
    check('email').notEmpty(),
    check('password').notEmpty().isLength({ min: 6 }),
    login);


router.get('/all', ensureAuth, getAllUsers);




module.exports = router;