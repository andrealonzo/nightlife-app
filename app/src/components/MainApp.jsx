/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports =  React.createClass({
    render:function(){
        return(
            <div>
		    <div className="jumbotron searchBox text-center">
		    <div className="container ">
              <h2>Find the best night clubs and bars in San Diego</h2>
              <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Find a bar or nightclub"></input>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Near address, neighborhood, city, state, or zip"></input>
                  </div>
                  <button className="btn btn-danger " type="submit" role="button">Search</button>
                </form>
            </div>
            </div>
            
<div className="container">
            <div className="row text-left">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                <div className="panel panel-default business">
                      <div className="panel-body">
                    <div className="pull-left">
                    
                    <img src="http://s3-media2.fl.yelpcdn.com/bphoto/sXG06Ss46cwO_lu1NvnBhw/ms.jpg" className="img-rounded"></img>
                    </div>
                    <div className="business-name">
                    Pitchers
                    </div>
                    <div className="business-address">
                
                        <div>9926 Carmel Mountain Rd</div>
                        <div>San Diego, CA 92129</div>
                        <div>(858) 484-3777</div>
                    </div>
                    </div>
                    
                    <div>
                    <img className="img-rounded" src="//s3-media4.fl.yelpcdn.com/photo/bdQAQk7m_JhjKQ0mpWI0bw/30s.jpg"></img>
                    </div>
                    <div>
                    "I love this place. If you are looking for a chill, local sports bar that borders on dive, this is your place. Located in a strip mall, there is plentiful..."
                    </div>
                    </div>
                
                 </div>
                <div className="col-md-3">
                </div>
            </div>
			
		</div>
		</div>
            );
    }
});