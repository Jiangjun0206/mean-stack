module.exports.homelist = function(req, res){
    res.render('locations-list', { title: 'Home',   
    pageHeader: {
        title: 'Worldcup',
        strapline: '2018 FIFA WorldCup is placing'
        },
    sidebar: "Looking for wifi and a seat? 2018 WorldCup helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let worldcup2018 help you find the place you're looking for.", 
    locations: [{
        name: 'Quarter Finals',
        address: 'Russian Samara Stadium',
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



module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};