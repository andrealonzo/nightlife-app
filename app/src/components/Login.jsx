/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
		  render:function(){
		    return(
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

)
		  }
		});
		