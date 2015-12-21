/** @jsx React.DOM */
'use strict'
var React = require('react')
var PollVote = require('./PollVote')
module.exports =  React.createClass({
    loadPoll:function(){
     var pollId = this.props.id;
     
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
                 poll:data
              });
             
                  }.bind(this),
          error: function(data){
             console.log("error receiving data", data);
                  }.bind(this),
          dataType: 'json'
        });
    },
    componentDidMount:function(){
      this.loadPoll();
    },
    handlePollSubmit:function(optionSelected){
        var voteApiUrl = "/api/vote";
        console.log("poll submitted",optionSelected);
        console.log("poll state",this.state);
        var vote = {name:this.state.poll.name, optionSelected: optionSelected};
         $.post( voteApiUrl, vote, 
          function(data){
              console.log("Vote successfully submitted", data);
          }.bind(this));
    },
    
      getInitialState: function() {
          return { 
              poll:{
                  name:'',
                  options:[{name:''}]
              } };
      },
      render:function(){
        return(
          <div>
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <PollVote poll={this.state.poll} onSubmit={this.handlePollSubmit}/>
            </div>
            <div className="col-md-4"></div>
            </div>
          </div>
      
      );
  }
  
});
 
  