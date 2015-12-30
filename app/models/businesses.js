'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Business = new Schema({
	id: String,
    user_reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }]
});

module.exports = mongoose.model('Business', Business);
