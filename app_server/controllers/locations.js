module.exports.homelist = function(req, res){
    res.render('locations-list', { title: 'Home',title1:'I live in kangson'});
   };
module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'My house is at kangson',title1:'I live in kangson'});
   };
module.exports.addReview = function(req, res){
    res.render('location-review', { title: 'Add review',title1:'I live in kangson' });
   };