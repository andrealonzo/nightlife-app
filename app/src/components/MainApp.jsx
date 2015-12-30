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
      if(this.state.searchInput.trim() && this.state.locationInput.trim()){
        this.search({
            search: this.state.searchInput, 
            location: this.state.locationInput});
      }
    },
    handleSearchChange:function(e){
        this.setState({searchInput: e.target.value});
    },
    handleLocationChange:function(e){
        this.setState({locationInput: e.target.value});
    },
    loadInitialLocation:function(callback){
        $.get("https://freegeoip.net/json/", function(response) {
            this.setState({location:response});
            callback(response.zip_code);
        }.bind(this), "json");
    },
    search:function(searchData){
            localStorage.setItem('search', JSON.stringify(searchData));
            var apiUrl = "/openapi/yelp";
            //get initial location
          $.get(apiUrl, searchData, function(result) {
            //replace with large image url
            result.businesses.map(function(business, index){
                var imgUrl = business.image_url;
                var newImgUrl = imgUrl.replace("ms.jpg", "o.jpg");
                result.businesses[index].image_url = newImgUrl;
            });
            this.setState({businesses: result.businesses});
        }.bind(this));
    },
  getInitialState: function() {
    return {
      user: {
          _id:null
      },
      searchInput: '',
      locationInput: '',
      businesses: [],
      location: {
          city: 'your city'
      }
    };
  },
  componentDidMount: function() {
      this.loadLoggedInUser();
      var savedSearch = JSON.parse(localStorage.getItem('search'));
      if(savedSearch){
          this.search(savedSearch);
      }else{
        this.loadInitialLocation(function(location){
            this.search({
                search:"bars or clubs", 
                location:location});
        }.bind(this));
      }
  },
  
  renderBusiness: function(business, index) {
    return(
        <div key = {index} className="row text-left">
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
                      
           <div className="col-lg-3 search-cols">
           
              <input type="text" className="form-control input-lg" id="search" onChange ={this.handleLocationChange} placeholder={"Near " + this.state.location.city}></input>
              </div>
           <div className="col-lg-8 search-cols">
           
     
              <input type="text" className="form-control input-lg" id="search" onChange ={this.handleSearchChange} placeholder="Find a bar or nightclub"></input>
   
          </div>
          <div className="col-lg-1 search-cols"><button className="btn btn-danger btn-lg btn-block" type="submit">Search</button></div>
          
        </div>
        </form>
        
            </div>
            </div>
            
            <div className="container">
            {this.state.businesses.map(this.renderBusiness)}
		</div>
		</div>
            );
    }
});