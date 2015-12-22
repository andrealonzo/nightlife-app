'use strict';

var Polls = require('../models/polls.js');
var mongoose = require('mongoose');

function VoteHandler () {

	this.handleError = function(err, res){
		console.log("An error occurred", err);
		res.json({error: "An error occurred"});
	};
	
	this.addVote = function (req, res) {
		console.log('adding vote for option id', req.body._id);
		 Polls.findOneAndUpdate(
			{ 'options._id':  mongoose.Types.ObjectId(req.body._id) },
			{ $inc: { 'options.$.numVotes': 1 }}
			)
			.exec(function (err, result) {
					if (err) { this.handleError(err,res); }
					console.log("Vote submitted successfully", result);
					res.json(result);
				}
			);
	
	};


}

module.exports = VoteHandler;
