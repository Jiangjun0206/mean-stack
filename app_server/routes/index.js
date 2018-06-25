var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');


/* GET home page. */

router.get('/location',ctrlLocations.locationInfo);
router.get('/', ctrlLocations.homelist);

router.get('/location/review/new', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);
module.exports = router;
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Welcome to MEAN(Mongodb,Express,Angularjs,Nodejs)' });
// });
//
// module.exports = router;
