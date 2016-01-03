/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
		  render:function(){
		    if(this.props.message.msg)
		    {
		      return  <div className={"alert animated fadeIn " + (this.props.message.type==="error"?
                              "alert-danger":
                              "alert-success")} 
                            role="alert">{this.props.message.msg}</div>
		    }
		    else{
		      return <div></div>
		    }
		  }
		});
		