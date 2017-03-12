var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'Node Blog Home',
      Posts: posts,
      pretty: true
    });
  });
});

router.get('/about', function (req, res, next) {
  res.render('blog/index', {
    title: 'About Node Blog',
    pretty: true
  });
});

router.get('/contact', function (req, res, next) {
  res.render('blog/index', {
    title: 'Contact Me',
    pretty: true
  });
});
