/** @jsx React.DOM */
'use strict'
var React = require("react");
var ExternalLoginOptions = require("./ExternalLoginOptions");
var Signup = require("./Signup");
var LocalLogin = require("./LocalLogin");

module.exports = React.createClass({
      handleSignupSubmit:function(signup){
        console.log(signup);
      },
      handleLoginSubmit:function(login){
        console.log(login);
      },
      handleBackClickOnLocalLogin:function(){
        this.setState({showPage:"ExternalLoginOptions"});
      },
      handleBackClickOnSignup:function(){
        this.setState({showPage:"ExternalLoginOptions"});
      },
      handleLoginClick:function(){
        this.setState({showPage:"LocalLogin"});
      },
      handleSignupClick:function(){
        this.setState({showPage:"Signup"});
      },

      getInitialState:function(){
        return({
          showPage:"ExternalLoginOptions"
        });
      },
		  render:function(){
		    return(
<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog modal-sm" role="document">
        {this.state.showPage==='ExternalLoginOptions'?
          <ExternalLoginOptions 
            onSignupClick = {this.handleSignupClick} 
            onLoginClick={this.handleLoginClick}>
          </ExternalLoginOptions>:
          this.state.showPage==="Signup"?
          <Signup 
            onBackClick = {this.handleBackClickOnSignup} 
            onSubmit = {this.handleSignupSubmit}
            >
          </Signup>:
          <LocalLogin 
            onBackClick = {this.handleBackClickOnLocalLogin}
            onSubmit = {this.handleLoginSubmit}
            >
          </LocalLogin>
        }
        
  </div>
</div>

)
		  }
		});
		