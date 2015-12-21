/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom')
var Navigation = require('./Navigation')
var PollApp = require('./PollApp')
 ReactDOM.render(
        <Navigation/>,
        document.getElementById('nav-container')
        );
ReactDOM.render(
      <PollApp/>,
      document.getElementById('pollApp')
      );