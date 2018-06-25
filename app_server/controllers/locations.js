module.exports.homelist = function(req, res){
    res.render('locations-list', { title: 'Home',   
    pageHeader: {
        title: 'Worldcup',
        strapline: '2018 FIFA WorldCup is placing'
        },
    locations: [{
        name: 'Quarter Finals',
        address: 'Russian Samara',
        rating: 2,
        facilities: ['Team Info', 'Preview', 'Players'],
        distance: '4-Teams'
        },{
        name: 'Semi Finals',
        address: 'Russian Kazan',
        rating: 4,
        facilities: ['Team Info', 'Preview', 'Players'],
        distance: '2-Teams'
        },{
        name: 'Final',
        address: 'Russian Moscow 15,july',
        rating: 5,
        facilities: ['Archive', 'Team Info'],
        distance: 'winner'
    }]
    });
   };



module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'My house is at kangson',title1:'I live in kangson'});
   };
module.exports.addReview = function(req, res){
    res.render('location-review', { title: 'Add review',title1:'I live in kangson' });
   };