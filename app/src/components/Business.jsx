/** @jsx React.DOM */
'use strict'
var React = require('react');

module.exports =  React.createClass({
    
     
    handleReservationChange:function(e){
        //check if user is logged in
        if(this.props.user._id){
            
        var reservationApiUrl = "/api/reservations";
        //if user is going to business
       if(e.target.value === "true"){
           
            console.log("adding reservation");
             $.ajax({
                type: "POST",
                url: reservationApiUrl,
                data: JSON.stringify({id:this.props.business.id}),
                contentType: "application/json",
                success: function(data){
                    this.setState({business:data});
                   console.log("reservation successful", data);
                        }.bind(this),
                error: function(data){
                   console.log("error receiving data", data);
                        },
                dataType: 'json'
              });
            }
        else{
            //user not going to business
            console.log("removing reservation");
             $.ajax({
                type: "DELETE",
                url: reservationApiUrl,
                data: JSON.stringify({id:this.props.business.id}),
                contentType: "application/json",
                success: function(data){
                    
                    this.setState({business:data});
                   console.log("reservation successful", data);
                        }.bind(this),
                error: function(data){
                   console.log("error receiving data", data);
                        },
                dataType: 'json'
              });
            }
        }else{
            $('#myModal').modal();
        }
        }
    ,
    renderAddress:function(addressPortion, index){
        return(
            <div key={index}>{addressPortion}</div>
            );
    },
    getInitialState: function() {
     
        return {
          business: {
              user_reservations:[],
              reservation:0
          }
        };
      },
      
    componentDidMount: function() {
        var reservationApiUrl = "/openapi/reservations";
        console.log('getting business', this.props.business.id);
             $.ajax({
                type: "GET",
                url: reservationApiUrl,
                data: {id:this.props.business.id},
                contentType: "application/json",
                success: function(business){
                    if(business && business.user_reservations)
                    {
                        //if logged in, check if user has reserved business
                        //if()
                        this.setState({business:business});
                    
                    }
                        }.bind(this),
                error: function(data){
                    
                   console.log("error receiving data", data);
                        },
                dataType: 'json'
        });
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
                
                <p className="lead">
                    {this.state.business.user_reservations.length} {this.state.business.user_reservations.length != 1? "people": "person" } going
                    </p>
                  </h4>  
                <select value={
                this.state.business.user_reservations.indexOf(this.props.user._id) > -1
                } className="form-control" onChange = {this.handleReservationChange}>
                  <option value="false">Not Going</option>
                  <option value ="true">Going</option>
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