'use strict';

var Users = require('../models/users.js');
var mongoose = require('mongoose');


function PollHandler () {

	this.getPolls = function (req, res) {
		if(req.query.id)
		{
			Users
				.findOne({ 'polls._id':  mongoose.Types.ObjectId((req.query.id)) }, {'polls.$': 1})
				.exec(function (err, result) {
					if (err) { throw err; }
					res.json(result.polls[0]);
				});
		}else{
			//return all polls for logged in user	
	
		Users
			.findOne({ 'github.id': req.user.github.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.polls);
			});
		}	
	};

	this.addPoll = function (req, res) {
		
		if(req.user.github.id){
				var poll = req.body;
				Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 
				$push: { 'polls': poll  }
			},{ 'new': true }).exec( function(err, result){
					if (err) { 
						console.log(err);
						res.json({error:"There was an error adding poll"}); 
					}
					console.log("Adding this poll",result.polls[result.polls.length-1]);
					res.json(result.polls[result.polls.length-1]);
			});
		
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
