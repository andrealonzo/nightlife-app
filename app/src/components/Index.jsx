/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom')
var React = require("react");
var Navigation = require('./Navigation')
var MainApp = require('./MainApp')
var Login = require('./Login')
var Footer = require('./Footer')

var App = React.createClass({
      handleLogin:function(){
        location.reload();
      },
      getInitialState:function(){
        return {user:null};
      },
      componentDidMount:function(){
        this.loadLoggedInUser();
      },
      loadLoggedInUser:function(){
        var userApiUrl = "/api/user";
       $.ajax({
        type: "GET",
        url: userApiUrl,
        contentType: "application/json",
        success: function(data){
           console.log("user successfully retrieved", data);
           this.setState({user:data});
        }.bind(this),
        error: function(data){
          //user not logged in
           console.log("error receiving user", data);
            this.setState({user:null})
                }.bind(this),
        dataType: 'json'
      });
      },
      render:function(){
            return(
                  <div>
                        <Navigation user={this.state.user}/>
                        <Login onLogin={this.handleLogin}/>
                        <MainApp user={this.state.user}/>
                        <Footer/>
                  </div>
                  )
      }
});


ReactDOM.render(
        <App/>,
        document.getElementById('app')
        );