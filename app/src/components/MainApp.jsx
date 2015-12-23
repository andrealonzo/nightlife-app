/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports =  React.createClass({
    render:function(){
        return(
            
<div className="container-fluid text-center">
		    <div className="jumbotron">
              <h1>Poll Plex</h1>
              <p>Create custom polls with live results.</p>
              <p><a className="btn btn-primary btn-lg" href="/login" role="button">Sign Up</a></p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h1>Live Results</h1>Live graphs show your poll results immediately in an easy to understand format. One graph will not provide the whole picture, that's why we provide multiple graph types to better describe your results.</div>
                <div className="col-md-4"><h1>Works Everywhere</h1>Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that.</div>
                <div className="col-md-4"><h1>Social Integration</h1>Free integrated facebook or traditional comments allow your poll voters to provide immediate feedback and discuss results. Social share buttons encourage your poll voters to help spread the word.</div>
            </div>
			
		</div>
            );
    }
});