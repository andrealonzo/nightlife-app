'use strict';

var Users = require('../models/users.js');
var Poll = require('../models/polls.js');
var mongoose = require('mongoose');

function PollHandler () {

	this.getPolls = function (req, res) {

		
		Users
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.polls);
			});
			
	};

	this.addPoll = function (req, res) {
		
		if(req.user.github.id){

				 var poll = req.body;
				
				Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 
				$push: { 'polls': poll  }
			})
			.exec(function (err, result) {
					if (err) { 
						console.log(err);
						
						res.json({error:"There was an error adding poll"}); 
						
					}

					res.json(result);
				}
			);
		
		}
		else{
			res.json({error:"User Not Logged In"});
		}
	};

	this.deletePoll = function (req, res) {
		var poll = req.body;
		Users.update( 
			{ 'github.id': req.user.github.id }, 
			{ $pull: { 'polls': {'_id': mongoose.Types.ObjectId((poll._id))}}},
			null,
			function(err,data){
				if(err) throw err;
				res.json(poll);
			});
	};

}

module.exports = PollHandler;
