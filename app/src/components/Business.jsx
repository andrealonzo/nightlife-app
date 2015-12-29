/** @jsx React.DOM */
'use strict'
var React = require('react');

     
module.exports =  React.createClass({
    renderAddress:function(addressPortion, index){
        return(
            <div key={index}>{addressPortion}</div>
            );
    },
    render:function(){
        return(
        <div className="panel panel-default animated fadeIn">
              <div className="panel-body business-body">
            
            <div className="row">
            
                <div className="col-md-7">
                
                <h2 className="business-name">{this.props.business.name}
                </h2>
                
                    {this.props.business.location.display_address.map(this.renderAddress)}
     
                    <div><p>{this.props.business.display_phone}</p></div>
                   
                </div>
                <div className="col-md-5">
                <h4>
                
                <p className="lead">
                    20 people going
                    </p>
                  </h4>  
                <select  className="form-control">
                  <option defaultValue value="Not Going">Not Going</option>
                  <option value = "Going">Going</option>
                </select>
                
                </div>
            </div>
            <p >
            <img src={this.props.business.image_url} className="img-responsive img-rounded"></img>
            </p>
            <div className="row review-row">
                <div className="col-xs-2">
                <img className="img-rounded " src={this.props.business.snippet_image_url}></img>
                </div>
                <div className="col-xs-10">
                {this.props.business.snippet_text}
                </div>
            
            </div>
            </div>
            
            </div>
                
            );
    }
});