/** @jsx React.DOM */
'use strict'
var React = require('react');
var Yelp = require('yelp');
     
module.exports =  React.createClass({
    getInitialState: function() {
    return {
      businessName: ''
    };
  },
 generateNonce: function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
},
  componentDidMount: function() {
    
  },
  
    render:function(){
        return(
            <div>
		    <div className="jumbotron searchBox text-center">
		    <div className="container ">
		    <div className="headline">
              <h2 >Find the best night clubs and bars in San Diego</h2>
              
              </div>
                      <div className="row">
                      
           <div className="col-lg-3 search-cols">
           
              <input type="text" className="form-control input-lg" id="search-church" placeholder="Near Locale"></input>
              </div>
           <div className="col-lg-8 search-cols">
           
     
              <input type="text" className="form-control input-lg" id="search-church" placeholder="Find a bar or nightclub"></input>
   
          </div>
          <div className="col-lg-1 search-cols"><button className="btn btn-danger btn-lg btn-block" type="submit">Search</button></div>
          
        </div>
        
            </div>
            </div>
            
            <div className="container">
            <div className="row text-left">
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                <div className="panel panel-default">
                      <div className="panel-body business-body">
                    
                    <div className="row">
                    
                        <div className="col-md-7">
                        
                        <h2 className="business-name">Pitchers
                        </h2>
                        
                        
                            <div>9926 Carmel Mountain Rd</div>
                            <div>San Diego, CA 92129</div>
                            <div><p>(858) 484-3777</p></div>
                           
                        </div>
                        <div className="col-md-5">
                        <h4>
                        
                        <p className="lead">
                            20 clubbers going
                            </p>
                          </h4>  
                        <select  className="form-control">
                          <option defaultValue value="Not Going">Not Going</option>
                          <option value = "Going">Going</option>
                        </select>
                        
                        </div>
                    </div>
                    <p >
                    <img src="http://s3-media2.fl.yelpcdn.com/bphoto/sXG06Ss46cwO_lu1NvnBhw/o.jpg" className="img-responsive img-rounded"></img>
                    </p>
                    <div className="row review-row">
                        <div className="col-xs-1">
                        <img className="img-rounded " src="//s3-media4.fl.yelpcdn.com/photo/bdQAQk7m_JhjKQ0mpWI0bw/30s.jpg"></img>
                        </div>
                        <div className="col-xs-11 ">
                        "I love this place. If you are looking for a chill, local sports bar that borders on dive, this is your place. Located in a strip mall, there is plentiful..."
                        </div>
                    
                    </div>
                    </div>
                    
                    </div>
                
                 </div>
                <div className="col-md-2">
                </div>
            </div>
			
		</div>
		</div>
            );
    }
});