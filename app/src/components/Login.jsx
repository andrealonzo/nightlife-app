/** @jsx React.DOM */
'use strict'
var React = require("react");
var ExternalLoginOptions = require("./ExternalLoginOptions");
module.exports = React.createClass({
		  render:function(){
		    return(
<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog modal-sm" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title text-center" id="myModalLabel">Log Into Urbane Dives</h4>
      </div>
      <div className="modal-body text-center">
        <ExternalLoginOptions></ExternalLoginOptions>
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>

)
		  }
		});
		