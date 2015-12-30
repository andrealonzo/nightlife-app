'use strict';

var path = process.cwd();
var YelpHandler = require(path + '/app/controllers/yelpHandler.server.js');
var ReservationHandler = require(path + '/app/controllers/reservationHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/');
		}
	}

	var yelpHandler = new YelpHandler();
	var reservationHandler = new ReservationHandler();
	

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user);
		});
		

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	// app.route('/api/:id/clicks')
	// 	.get(isLoggedIn, clickHandler.getClicks)
	// 	.post(isLoggedIn, clickHandler.addClick)
	// 	.delete(isLoggedIn, clickHandler.resetClicks);
		
	app.route('/api/reservations')
		.post(isLoggedIn, reservationHandler.addReservation)
		.delete(isLoggedIn, reservationHandler.removeReservation);
		
	app.route('/openapi/reservations')
		.get(reservationHandler.getReservations);
	
	// app.route('/api/:id/polls')
	// 	.get(isLoggedIn,pollHandler.getPolls)
	// 	.post(isLoggedIn, pollHandler.addPoll)
	// 	.delete(isLoggedIn, pollHandler.deletePoll);
		
	// app.route('/openapi/getPoll')
	// 	.get(pollHandler.getPolls);
		
	app.route('/openapi/yelp')
		.get(yelpHandler.getResults);
		
	app.route('/vote')
		.get(function (req, res) {
			res.sendFile(path + '/public/vote.html');
		});
	app.route('/test')
		.get(function (req, res) {
			res.sendFile(path + '/public/test.html');
		});
};
