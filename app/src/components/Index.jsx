/** @jsx React.DOM */
'use strict'
var ReactDOM = require('react-dom')
var Navigation = require('./Navigation')
var MainApp = require('./MainApp')
var Login = require('./Login')
var Footer = require('./Footer')
ReactDOM.render(
        <Navigation/>,
        document.getElementById('nav-container')
        );
        
ReactDOM.render(
      <Login/>,
      document.getElementById('login')
      );
ReactDOM.render(
      <MainApp/>,
      document.getElementById('main')
      );
ReactDOM.render(
      <Footer/>,
      document.getElementById('footer')
      );
      