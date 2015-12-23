/** @jsx React.DOM */
'use strict'
var React = require("react");
var NewPoll = require("./NewPoll");
var MyPolls = require("./MyPolls");
var PollAddSuccess = require("./PollAddSuccess");
var VoteResults = require("./VoteResults");
module.exports =  React.createClass({
  getMyPage:function(){
    console.log("in here");
  },
  getInitialState: function() {
      return { showPage: "newPoll" };
  },
  handleNewPollClick: function() {
      this.setState({ showPage: "newPoll" });
  },
  handleMyPollsClick: function() {
      this.setState({ showPage: "myPolls" });
  },
  handleAddNewPoll:function(poll){
    this.setState({pollId:poll._id, showPage:"addedNewPoll"});
    console.log("newPollAdded", poll);
  },
  handlePollResults:function(poll){
    this.loadPoll(poll._id);
  },
  loadPoll:function(pollId){
    var pollApiUrl = "/openapi/getPoll";
      console.log("loading poll " + pollId);
       $.ajax({
        type: "GET",
        url: pollApiUrl,
        data: {id:pollId},
        contentType: "application/json",
        success: function(data){
           console.log("data successfully retrieved", data);
           this.setState({
               poll:data,
             showPage: "pollResults" });
                }.bind(this),
        error: function(data){
           console.log("error receiving data", data);
                }.bind(this),
        dataType: 'json'
      });
  },
  render:function(){
    return(
      <div>
        <div className="jumbotron">
          <h1>Dashboard</h1>
          <p>
            What would you like to do today?
          </p>
          <p>
            <a className="btn btn-primary btn-lg" onClick = {this.handleNewPollClick} role="button">New Poll</a>
            <a className="btn btn-primary btn-lg" onClick = {this.handleMyPollsClick} role="button">My Polls</a>
          </p>
        </div>
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        
        { 
          this.state.showPage === "newPoll" ? <NewPoll onAddNewPoll={this.handleAddNewPoll}/>  : 
          this.state.showPage === "myPolls" ? <MyPolls onShowResults = {this.handlePollResults}/> : 
          this.state.showPage === "pollResults" ? <VoteResults poll = {this.state.poll}/> : 
          <PollAddSuccess pollId = {this.state.pollId}/>}
        </div>
        <div className="col-md-4"></div>
        
        
        </div>
      </div>
      
      );
  }
  
});