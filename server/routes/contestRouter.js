const router = require('express').Router();
const { addScreenplay } = require('../controllers/contest.controller');
const ensureAuth = require('../middleware/auth');
const { upload } = require('../config/s3-config');



router.post('/add-screenplay',
    ensureAuth,
    upload.single('screenplay'),
    addScreenplay
);

module.exports = router;