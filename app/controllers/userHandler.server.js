'use strict';

function UserHandler(){
    this.signup = function(req,res,next){
        console.log("signup reached");
    }
}

module.exports = UserHandler;