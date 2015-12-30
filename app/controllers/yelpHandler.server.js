'use strict';

var Yelp = require('yelp');

function YelpHandler () {

	this.handleError = function(err, res){
		console.log("An error occurred", err);
		res.json({error: "An error occurred"});
	};
	
	this.getResults = function (req, res) {
        var yelp = new Yelp({
          consumer_key: process.env.YELP_OAUTH_CONSUMER_KEY,
          consumer_secret: process.env.YELP_OAUTH_CONSUMER_SECRET,
          token: process.env.YELP_OAUTH_TOKEN,
          token_secret: process.env.YELP_OAUTH_TOKEN_SECRET,
        });
        yelp.search({ term: req.query.search, location: req.query.location })
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
        
	};


}

module.exports = YelpHandler;
