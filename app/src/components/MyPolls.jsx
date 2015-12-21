/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
    loadPolls: function(){
      var pollApiUrl = "/api/15024773/polls";
      $.getJSON( pollApiUrl, 
          function(data){
             this.setState({polls:data});
          }.bind(this)
      );
    },
    getInitialState: function() {
      return {polls:[]};
          
    },
    componentDidMount:function(){
      this.loadPolls();
    },
    createPoll:function(poll, index){
      return(
         <li key = {index} className="list-group-item text-right">
          <div className="pull-left">{poll.name}</div>

          <button type="button" onClick = {this.handleDeletePollClick.bind(this,poll)} className="btn btn-danger">
     delete 
          </button>
          </li>
         );
    },
    handleDeletePollClick:function(poll){
      var pollApiUrl = "/api/15024773/polls";
      $.ajax({
                url:  pollApiUrl,
                dataType: 'json',
                data: poll,
                type: 'DELETE',
                success:  function(successData){
                 this.loadPolls();
                }.bind(this)
      }
      );
    },
    render:function(){
      return(
        <ul className="list-group text-left">
         {this.state.polls.map(this.createPoll)}
        </ul>
        );
    }
  });