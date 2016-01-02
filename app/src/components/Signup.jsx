/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
		  render:function(){
		    return(
		        <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title text-center" id="myModalLabel">Register</h4>
      </div>
      <div className="modal-body text-left">
            <form>
          <div className="form-group">
            <label >Full Name</label>
            <input type="text" className="form-control" id="Full Name" ></input>
          </div>
          <div className="form-group">
            <label >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1"></input>
          </div>
          <div className="form-group">
            <label >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
          </div>
          <div className="row">
          <div className="col-xs-6">
          <button type="button" className="btn btn-default" onClick={this.props.onBackClick}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Back</button>
          </div>
          <div className="col-xs-6 text-right">
          <button type="submit" className="btn btn-default">Submit</button>
          </div>
          </div>
        </form>
      
    
		
        

		
      </div>
      <div className="modal-footer">
      </div>
    </div>

)
		  }
		});
		