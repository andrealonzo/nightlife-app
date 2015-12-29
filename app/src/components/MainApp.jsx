/** @jsx React.DOM */
'use strict'
var React = require('react');
var Yelp = require('yelp');
var Business = require('./Business')
     
module.exports =  React.createClass({
    loadInitialLocation:function(){
        $.get("https://freegeoip.net/json/", function(response) {
            this.setState({location:response});
        }.bind(this), "json");
    },
  getInitialState: function() {
    return {
      businesses: [],
      location: {
          city: 'your city'
      }
    };
  },
  componentDidMount: function() {
    var apiUrl = "/openapi/yelp";
    $.get(apiUrl, function(result) {
        //replace with large image url
        result.businesses.map(function(business, index){
            var imgUrl = business.image_url;
            var newImgUrl = imgUrl.replace("ms.jpg", "o.jpg");
            result.businesses[index].image_url = newImgUrl;
        });
        this.setState({businesses: result.businesses});
    }.bind(this));
    //get initial location
    this.loadInitialLocation();
  },
  
  renderBusiness: function(business, index) {
    return(
        <div key = {index} className="row text-left">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                    <Business business = {business}></Business>
                 </div>
                <div className="col-md-1">
                </div>
            </div>
        );
  },
    render:function(){
        return(
            <div>
		    <div className="jumbotron searchBox text-center">
		    <div className="container ">
		    <div className="headline">
              <h2 >Find the best night clubs and bars in {this.state.location.city}</h2>
              
              </div>
                      <div className="row">
                      
           <div className="col-lg-3 search-cols">
           
              <input type="text" className="form-control input-lg" id="search-church" placeholder={"Near " + this.state.location.city}></input>
              </div>
           <div className="col-lg-8 search-cols">
           
     
              <input type="text" className="form-control input-lg" id="search-church" placeholder="Find a bar or nightclub"></input>
   
          </div>
          <div className="col-lg-1 search-cols"><button className="btn btn-danger btn-lg btn-block" type="submit">Search</button></div>
          
        </div>
        
            </div>
            </div>
            
            <div className="container">
            {this.state.businesses.map(this.renderBusiness)}
		</div>
		</div>
            );
    }
});