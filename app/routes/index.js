'use strict';

var path = process.cwd();
var PollHandler = require(path + '/app/controllers/pollHandler.server.js');
var VoteHandler = require(path + '/app/controllers/voteHandler.server.js');
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/main');
		}
	}

	var pollHandler = new PollHandler();
	var clickHandler = new ClickHandler();
	var voteHandler = new VoteHandler();
	

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/dashboard.html');
		});
		
		
	app.route('/dashboard')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/dashboard.html');
		});
		
		

	app.route('/main')
		.get(function (req, res) {
			res.sendFile(path + '/public/main.html');
		});

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});
		

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/dashboard',
			failureRedirect: '/login'
		}));

	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);
		
		
	
	app.route('/api/:id/polls')
		.get(isLoggedIn,pollHandler.getPolls)
		.post(isLoggedIn, pollHandler.addPoll)
		.delete(isLoggedIn, pollHandler.deletePoll);
		
	app.route('/openapi/getPoll')
		.get(pollHandler.getPolls);
		
	app.route('/api/vote')
		.post(voteHandler.addVote);
		
	app.route('/vote')
		.get(function (req, res) {
			res.sendFile(path + '/public/vote.html');
		});
	app.route('/test')
		.get(function (req, res) {
			res.sendFile(path + '/public/test.html');
		});
};
