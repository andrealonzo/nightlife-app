/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom')
var Navigation = require('./Navigation')
var MainApp = require('./MainApp')
ReactDOM.render(
        <Navigation/>,
        document.getElementById('nav-container')
        );
ReactDOM.render(
      <MainApp/>,
      document.getElementById('main')
      );
      