'use strict';

var path = process.cwd();
var YelpHandler = require(path + '/app/controllers/yelpHandler.server.js');
var ReservationHandler = require(path + '/app/controllers/reservationHandler.server.js');
var UserHandler = require(path + '/app/controllers/userHandler.server.js');

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
	var userHandler = new UserHandler();
	

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

	app.route('/auth/facebook')
		.get(passport.authenticate('facebook'));

	app.route('/auth/facebook/callback')
		.get(passport.authenticate('facebook', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	app.route('/auth/google')
		.get(passport.authenticate('google', 
			{ scope: 'https://www.googleapis.com/auth/plus.login' }));

	app.route('/auth/google/callback')
		.get(passport.authenticate('google', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));
		
	app.route('/api/reservations')
		.post(isLoggedIn, reservationHandler.addReservation)
		.delete(isLoggedIn, reservationHandler.removeReservation);
		
	app.route('/openapi/reservations')
		.get(reservationHandler.getReservations);
	
	app.route('/openapi/yelp')
		.get(yelpHandler.getResults);
		
	app.route('/openapi/user/signup')
		.post(userHandler.signup);
		
};
