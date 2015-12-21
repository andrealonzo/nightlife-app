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
      <h1>Congratulations!  Your poll has been created.  Access your poll below</h1>
      <a target= "_blank" href={pollUrl}>
      {pollUrl}
      </a>
      </div>
      );
  }
});
