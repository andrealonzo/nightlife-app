/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
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
		        <nav className="navbar navbar-default">
   <div className="container" >
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Urbane Dives</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
 
      </ul>
      <ul className="nav navbar-nav navbar-right">
      <li>{this.state.user?<a href="/logout">Logout</a>:<a href="#" data-toggle="modal" data-target="#myModal">Login</a>}</li>
      </ul>
    </div>
  </div>
  
</nav>
<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title text-center" id="myModalLabel">Log Into Urbane Dives</h4>
      </div>
      <div className="modal-body text-center">
        <a className="btn btn-primary btn-lg" href="/auth/github" role="button">
						<img src="/public/img/github_32px.png" alt="github logo" />
						LOGIN WITH GITHUB</a>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>

</div>
)
		  }
		});
		