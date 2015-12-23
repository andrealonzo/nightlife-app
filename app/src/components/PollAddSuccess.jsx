/** @jsx React.DOM */
'use strict'
var React = require("react");
var pollAppUrl = window.location.origin;
module.exports = React.createClass({
  getInitialState:function(){
    return{pollUrl:null};
  },
  render:function(){
    var pollUrl = pollAppUrl + "/vote?id="+this.props.pollId;
    return(
      <div>
      <h1>Congratulations!</h1>  <h3>Your poll has been posted to</h3>
      <a target= "_blank" href={pollUrl}>
      {pollUrl}
      </a>
      </div>
      );
  }
});
