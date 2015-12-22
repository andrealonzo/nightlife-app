'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OptionSchema = require('./options').schema;

var Poll = new Schema({
   name: String,
   options:[OptionSchema],
   creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Poll', Poll);
