const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/dashboard',  async (req, res) => {
  
  res.render('dashboard', {layout: 'index'});
});


module.exports = router