var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
});
module.exports = router;
