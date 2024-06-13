const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('landing')
});


router.get('/test', (req, res) => {
    res.render('test')
});

module.exports = router