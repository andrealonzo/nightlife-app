/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
  getInitialState:function(){
    return{pollUrl:null};
  },
  render:function(){
    var pollUrl = "https://voting-app-paycoguy.c9users.io/vote?id="+this.props.pollId;
    return(
      <div>
      <h1>Congratulations!  Your poll has been created.  Access your poll below</h1>
      <a href={pollUrl}>
      {pollUrl}
      </a>
      </div>
      );
  }
});
