const router =require('express').Router();

const home = require('./routes/Home');

router.use('/', home);

module.exports = router;