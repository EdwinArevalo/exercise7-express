var express = require('express');
var router = express.Router();

let inscription = {
  course: '',
  modules: [],
  paymentType: 0,
  amount: 0
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('courses', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
}).post('/',(req, res)=>{
  
   if (req.body.course == 1){
    inscription.course = 'Java';
    inscription.amount = 1200;
   }
   if (req.body.course == 2){
    inscription.course = 'Php';
    inscription.amount = 800;
  }
  if (req.body.course == 3){
    inscription.course = '.NET';
    inscription.amount = 1500;

  }
  console.log(inscription);
  res.redirect('/courses/level');

});

router.get('/level', function(req, res, next) {
  res.render('courses-level', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
}).post('/level',(req, res)=>{
   if(req.body.basic){
    inscription.modules.push(req.body.basic);
   }
   if(req.body.intermediate){
    inscription.modules.push(req.body.intermediate);
   }
   if(req.body.avanced){
     inscription.modules.push(req.body.avanced);
   }
   if(inscription.course == 'Php'){
     inscription.amount = (inscription.modules.length) *  inscription.amount;
   }
   if(inscription.course == 'Java'){
    inscription.amount = (inscription.modules.length) *  inscription.amount;
  }
  if(inscription.course == '.NET'){
    inscription.amount = (inscription.modules.length) *  inscription.amount;
  }
   console.log(inscription);
   res.redirect('/courses/pay');

});

router.get('/pay', function(req, res, next) {
  res.render('courses-pay', function(err, html) {
    res.render('templates/layout', {
      'seccion': html
    })
  });
}).post('/pay',(req, res)=>{

  req.body.type == 'Effective' ? inscription.paymentType = req.body.type: inscription.paymentType = req.body.type;
  console.log(inscription);
  if(inscription.paymentType == 'Effective'){
    inscription.amount = inscription.amount - (inscription.amount *0.1);
  }
  console.log(inscription);
  res.render('result',{inscription});
});

module.exports = router;
