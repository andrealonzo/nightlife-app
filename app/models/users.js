'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PollSchema = require('./polls').schema;
var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
   nbrClicks: {
      clicks: Number
   }
});

module.exports = mongoose.model('User', User);
