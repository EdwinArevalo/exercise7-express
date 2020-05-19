var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('courses', { title: 'Courses' });
});

router.get('/level', function(req, res, next) {
    res.render('courses-level', { title: 'Level' });
  });

  router.get('/pay', function(req, res, next) {
    res.render('courses-pay', { title: 'Pay' });
  });

module.exports = router;
