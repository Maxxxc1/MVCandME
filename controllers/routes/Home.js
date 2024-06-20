const router = require('express').Router();
const { Blog, User } = require('../../models');


router.get('/', async (req, res) => { 

  const blogData = await Blog.findAll({include: User}).catch((err) => {
    res.json(err)

  });
const blogs = blogData.map((blog) => blog.get({ plain: true })); 

console.log(blogs)
res.render('home', {blogs} )
});

router.get('/signup', async (req,res) => {
  res.render('signup');
});

router.get('/login', async (req,res) => {

  res.render('login')
})


module.exports = router