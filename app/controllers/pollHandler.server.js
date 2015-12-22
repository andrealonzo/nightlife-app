'use strict';

var Poll = require('../models/polls.js');
var mongoose = require('mongoose');


function PollHandler () {
	this.handleError = function(err, res){
		console.log("An error occurred", err);
		res.json({error: "An error occurred"});
	};
	this.getPolls = function (req, res) {
		if(req.query.id)
		{
			console.log("Retrieving poll id", req.query.id);
			//return one poll
			Poll
				.findOne({ '_id':  mongoose.Types.ObjectId((req.query.id)) })
				.exec(function (err, result) {
					if (err) { this.handleError(err,res); }
					res.json(result);
				});
		}else if(req.user._id){
			
			//get all polls for a single user
			Poll
				.find({creator:mongoose.Types.ObjectId(req.user._id)})
				.exec(function(err,result){
					if (err) { this.handleError(err,res); }
					res.json(result);
				});
		}else{
			
			this.handleError({error:"User Not Logged In"},res);
		}	
	};

	this.addPoll = function (req, res) {
		if(req.user._id){
			var poll = new Poll(req.body);
			poll.creator = req.user._id;
			console.log("poll to add", poll);
			poll.save(function (err, resPoll) {
			if (err) return this.handleError(err,res);
				console.log("Saved this poll",resPoll);
	 			res.json(resPoll);
			  // saved!
			})
		}
		else{
			this.handleError({error:"User Not Logged In"},res);
		}
	};

	this.deletePoll = function (req, res) {
		if(req.user._id){
			var poll = req.body;
			Poll
				.find({_id:poll._id,creator:mongoose.Types.ObjectId(req.user._id)})
				.remove()
				.exec(function(err,data){
					if (err) return this.handleError(err,data);	
					res.json(data);
				});
			
		}
		else{
			this.handleError({error:"User Not Logged In"},res);
		}
	};

}

module.exports = PollHandler;
