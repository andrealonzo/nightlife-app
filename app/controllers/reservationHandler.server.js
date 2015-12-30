'use strict';

var Businesses = require('../models/businesses.js');
var mongoose = require('mongoose');

function VoteHandler () {

	this.handleError = function(err, res){
		console.log("An error occurred", err);
		res.json({error: "An error occurred"});
	};
	
	this.addReservation = function (req, res) {
	    console.log("add reservation request received for", req.body.restaurant);
// 		 Businesses.findOneAndUpdate(
// 			{ 'options._id':  mongoose.Types.ObjectId(req.body._id) },
// 			{ $inc: { 'options.$.numVotes': 1 }}
// 			)
// 			.exec(function (err, result) {
// 					if (err) { this.handleError(err,res); }
// 					console.log("Vote submitted successfully", result);
// 					res.json(result);
// 				}
// 			);
	
	};
	
	this.removeReservation = function (req, res) {
		console.log('remove reservation request', req.body.restaurant);
// 		 Businesses.findOneAndUpdate(
// 			{ 'options._id':  mongoose.Types.ObjectId(req.body._id) },
// 			{ $inc: { 'options.$.numVotes': 1 }}
// 			)
// 			.exec(function (err, result) {
// 					if (err) { this.handleError(err,res); }
// 					console.log("Vote submitted successfully", result);
// 					res.json(result);
// 				}
// 			);
	
	};


}

module.exports = VoteHandler;
