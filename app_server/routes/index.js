var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Welcome to MEAN(Mongodb,Express,Angularjs,Nodejs)' });
// });
//
// module.exports = router;
