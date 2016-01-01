/** @jsx React.DOM */
'use strict'
var React = require('react');

module.exports =  React.createClass({
    
    handleReservationChange:function(e){
        this.props.onReservationChange(e, this.props.business.id);
    },
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
                
                <h2 className="business-name">
                <a href = {this.props.business.url} target = "_blank">
                {this.props.business.name}
                
                </a>
                </h2>
                
                    {this.props.business.location.display_address.map(this.renderAddress)}
     
                    <div><p>{this.props.business.display_phone}</p></div>
                   
                </div>
                <div className="col-md-5">
                <h4>
                
                    {this.props.business.user_reservations.length} {this.props.business.user_reservations.length != 1? "people": "person" } going
         
                  </h4>  
                <select name={this.props.business.id} value={
                this.props.business.user_reservations.indexOf(this.props.user._id) > -1
                } className="form-control" onChange = {this.handleReservationChange}>
                  <option value="false">Not Going</option>
                  <option value ="true">Going</option>
                </select>
                
                </div>
            </div>
            <p>
            <img src={this.props.business.image_url} className="img-responsive img-rounded"></img>
            </p>
            <div className="row review-row">
                <div className="col-xs-2">
                <img className="img-responsive img-rounded " src={this.props.business.snippet_image_url}></img>
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