var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('courses', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
});

router.get('/level', function(req, res, next) {
  res.render('courses-level', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
});

router.get('/pay', function(req, res, next) {
  res.render('courses-pay', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
});

module.exports = router;
