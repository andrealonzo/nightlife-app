'use strict';

var Users = require('../models/users.js');
var Options = require('../models/options.js');
var mongoose = require('mongoose');

function VoteHandler () {

	this.addVote = function (req, res) {
		console.log("voting for option", req.body._id);
		Options.findById(req.body._id, function (err, doc){
  console.log("found err", err);
  console.log("found option", doc);
		 });
		// Users.findOneAndUpdate(
		// 	{ 'polls.options._id':  mongoose.Types.ObjectId(req.body._id) },{'options.$':1},
		// 	{ $inc: { 'numVotes': 1 }}
		// 	)
		// 	.exec(function (err, result) {
		// 			if (err) { 
		// 				console.log(err);
		// 				res.json({error:"Error submitting vote"});
						
		// 			}else{
		// 				console.log("Vote submitted successfully", result);
		// 				res.json(result);
		// 			}
		// 		}
		// 	);
			
		// console.log("adding vote", req.body);
		// var id = req.body.id;
		// var optionSelected = req.body.optionSelected;
		// if(id && optionSelected)
		// {
		// 		res.json({});
		// }
		// else
		// {
		// 	res.json({error:"Invalid Vote"});
		// }
	};


}

module.exports = VoteHandler;
