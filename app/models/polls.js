'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
   name: String,
   options:[
      {
         name:String,
         numVotes:Number
      }
      ]
});

module.exports = mongoose.model('Poll', Poll);
