'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Option = new Schema({
         name:String,
         numVotes:Number
});

module.exports = mongoose.model('Option', Option);
