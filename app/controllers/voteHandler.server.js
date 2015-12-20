'use strict';

var Users = require('../models/users.js');
var mongoose = require('mongoose');

function VoteHandler () {

	this.addVote = function (req, res) {
		console.log("adding vote", req.body);
		var id = req.body.id;
		var optionSelected = req.body.optionSelected;
		if(id && optionSelected)
		{
				res.json({});
		}
		else
		{
			res.json({error:"Invalid Vote"});
		}
		/*
		if(req.user.github.id){
				var poll = req.body;
				Users
			.findOneAndUpdate({ 'github.id': req.user.github.id }, { 
				$push: { 'polls': poll  }
			})
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
		
		}
		else{
			res.json({error:"User Not Logged In"});
		}
		*/
	};


}

module.exports = VoteHandler;
