'use strict';

var Businesses = require('../models/businesses.js');
var mongoose = require('mongoose');

function ReservationHandler () {

	this.handleError = function(err, res){
		console.log("An error occurred", err);
		res.json({error: "An error occurred"});
	};
	
	
	
	this.getReservations = function (req, res) {
	    console.log("received get reservation request for",req.query);
	    var businessId = req.query.id;
	    Businesses.findOne({ 'id': businessId }, function (err, business) {
	        
				if (err) {
            		console.log("An error occurred", err);
            		res.json({error: "An error occurred"});
				}
				console.log("retrieving this business", business);
				res.json(business);

	    });	
	
	};
	
	this.addReservation = function (req, res) {
	    console.log('in add reservation');
	    
	    console.log("add reservation request received for", req.body.id);
	    var businessId = req.body.id;
				    
		    //add reservation to business
		 Businesses.findOneAndUpdate(
			{ 'id':  businessId },
			{ $addToSet: { 'user_reservations': mongoose.Types.ObjectId(req.user._id)  }},
			{ 'new': true, 'upsert': true}
			)
			.exec(function (err, result) {
					if (err) { 
                		console.log("An error occurred", err);
                		res.json({error: "An error occurred"});
					}
				
					res.json(result);
				}
			);
	    
	
	};
	
	this.removeReservation = function (req, res) {
	    console.log('in remove reservation');
	    
		console.log('remove reservation request', req.body);
		 var businessId = req.body.id;
		Businesses.findOneAndUpdate(
            			{ 'id':  businessId },
            			{ $pull: { 'user_reservations': mongoose.Types.ObjectId(req.user._id)  }},
            			{ 'new': true}
            			)
            			.exec(function (err, result) {
            					if (err) { 
                            		console.log("An error occurred", err);
                            		res.json({error: "An error occurred"});
            					}
            				
            					res.json(result);
            				}
            			);

	};


}

module.exports = ReservationHandler;
