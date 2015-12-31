/** @jsx React.DOM */
'use strict'
var React = require('react');
var Yelp = require('yelp');
var Business = require('./Business')
     
module.exports =  React.createClass({
    loadLoggedInUser:function(){
        var userApiUrl = "/api/user";
       $.ajax({
        type: "GET",
        url: userApiUrl,
        contentType: "application/json",
        success: function(data){
           console.log("user successfully retrieved", data);
           this.setState({user:data});
        }.bind(this),
        error: function(data){
          //user not logged in
                }.bind(this),
        dataType: 'json'
      });
      },
    handleSubmit:function(e){
        e.preventDefault();
        this.search(this.state.location);
    },
    handleLocationChange:function(e){
        this.setState({location: e.target.value});
    },
    loadIPLocation:function(callback){
        $.get("https://freegeoip.net/json/", function(response) {
            this.setState({location:response.city});
            callback(response.city);
        }.bind(this), "json");
    },
    search:function(location){
            localStorage.setItem('location', JSON.stringify(location));
            var apiUrl = "/openapi/yelp";
            //get initial location
            var searchData = {search:'nightlife', location:location};
          $.get(apiUrl, searchData, function(result) {
            //replace with large image url
            if(result.businesses){
                result.businesses.map(function(business, index){
                    var imgUrl = business.image_url;
                    if(imgUrl){
                        var newImgUrl = imgUrl.replace("ms.jpg", "o.jpg");
                    }
                    
                    result.businesses[index].image_url = newImgUrl;
                });
                this.setState({businesses: result.businesses});
            }
            else{
                this.setState({businesses:[]});
            }
        }.bind(this));
    },
  getInitialState: function() {
    return {
      user: {
          _id:null
      },
      searchInput: 'nightlife',
      businesses: [],
      location: ''
    };
  },
  componentDidMount: function() {
      this.loadLoggedInUser();
      var savedLocation = JSON.parse(localStorage.getItem('location'));
      if(savedLocation){
          this.setState({location: savedLocation});
          this.search(savedLocation);
      }else{
        this.loadIPLocation(function(location){
            this.search(location);
        }.bind(this));
      }
  },
  
  renderBusiness: function(business, index) {
    return(
        <div key = {business.id} className="row text-left">
                <div className="col-md-1">
                </div>
                <div className="col-md-10">
                    <Business business = {business} user={this.state.user}></Business>
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
              <h2 >Find the best night clubs and bars</h2>
              
              </div>
              <form onSubmit={this.handleSubmit}>
                      <div className="row">
            <div className="col-md-3"></div> 
           <div className="col-md-5 search-cols">
           
              <input type="text" className="form-control input-lg" id="search" onChange ={this.handleLocationChange} placeholder="Near your city" value ={this.state.location}></input>
              </div>

          <div className="col-md-1 search-cols"><button className="btn btn-danger btn-lg btn-block" type="submit">Search</button></div>
          <div className="col-md-3"></div>
          
        </div>
        </form>
        
            </div>
            </div>
            
            <div className="container">
            {this.state.businesses.length > 0?
                this.state.businesses.map(this.renderBusiness):
                <h1 className="text-center"><p>No results found</p></h1>
            }
		</div>
		</div>
            );
    }
});