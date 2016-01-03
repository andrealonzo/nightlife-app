'use strict';

var User = require('../models/users.js');
var passport = require('passport');

function UserHandler(){
    this.signup = function(req,res,next){
        req.assert('email', 'Email is not valid').isEmail();
        req.assert('password', 'Password must be at least 4 characters long').len(4);
        req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);
        
        var errors = req.validationErrors();
        if(errors){
            return res.status(400).json(errors[0]);
        }
         
      var user = new User();
      user.email = req.body.email;
      user.password=req.body.password;

      User.findOne({ email: req.body.email }, function(err, existingUser) {
        if (existingUser) {
          return res.status(400).json({msg: 'Account with that email address already exists.' });
        }
        user.save(function(err) {
          if (err) {
            return res.status(400).json({msg: 'There was an error saving user' });
          }
          return res.json(user);
        });
      });
    
        
    }
    
    
/**
 * POST /login
 * Sign in using email and password.
 */
this.login = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).json(errors[0]);
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      console.error({ msg: info.message });
      return res.status(400).json({ msg: info.message });
    }
    req.logIn(user, function(err) {
      if (err) {
        console.error(err);
        return next(err);
      }
        return res.json({ msg: 'Success! You are logged in.' });
    });
  })(req, res, next);
};
}

module.exports = UserHandler;