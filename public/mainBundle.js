/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var ReactDOM = __webpack_require__(1)
	var Navigation = __webpack_require__(2)
	var MainApp = __webpack_require__(11)
	ReactDOM.render(
	        React.createElement(Navigation, null),
	        document.getElementById('nav-container')
	        );
	ReactDOM.render(
	      React.createElement(MainApp, null),
	      document.getElementById('main')
	      );
	      

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3);
	module.exports = React.createClass({displayName: "module.exports",
	      getInitialState:function(){
	        return {user:null};
	      },
	      componentDidMount:function(){
	        this.loadLoggedInUser();
	      },
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
	           console.log("error receiving user", data);
	            this.setState({user:null})
	                }.bind(this),
	        dataType: 'json'
	      });
	      },
			  render:function(){
			    return(
			        React.createElement("nav", {className: "navbar navbar-default"}, 
	   React.createElement("div", {className: "container-fluid"}, 
	    React.createElement("div", {className: "navbar-header"}, 
	      React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
	        React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"})
	      ), 
	      React.createElement("a", {className: "navbar-brand", href: "/"}, "Poll Plex")
	    ), 

	    React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
	      React.createElement("ul", {className: "nav navbar-nav"}, 
	        React.createElement("li", {className: "active"}, React.createElement("a", {href: "/"}, "Home ", React.createElement("span", {className: "sr-only"}, "(current)")))
	 
	      ), 
	      React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
	      React.createElement("li", null, this.state.user?React.createElement("a", {href: "/logout"}, "Logout"):React.createElement("a", {href: "/login"}, "Login"))
	      )
	    )
	  )
	)
	)
			  }
			});
			

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3)

	module.exports =  React.createClass({displayName: "module.exports",
	    render:function(){
	        return(
	            
	React.createElement("div", {className: "container-fluid text-center"}, 
			    React.createElement("div", {className: "jumbotron"}, 
	              React.createElement("h1", null, "Poll Plex"), 
	              React.createElement("p", null, "Create custom polls with live results."), 
	              React.createElement("p", null, React.createElement("a", {className: "btn btn-primary btn-lg", href: "/login", role: "button"}, "Sign Up"))
	            ), 
	            React.createElement("div", {className: "row"}, 
	                React.createElement("div", {className: "col-md-4"}, 
	                    React.createElement("h1", null, "Live Results"), "Live graphs show your poll results immediately in an easy to understand format. One graph will not provide the whole picture, that's why we provide multiple graph types to better describe your results."), 
	                React.createElement("div", {className: "col-md-4"}, React.createElement("h1", null, "Works Everywhere"), "Traditional desktop computers now represent only 30% of Internet traffic. Your poll must work on the tablets, smart phones, netbooks and notebooks that your visitors are using. Our responsive designs do just that."), 
	                React.createElement("div", {className: "col-md-4"}, React.createElement("h1", null, "Social Integration"), "Free integrated facebook or traditional comments allow your poll voters to provide immediate feedback and discuss results. Social share buttons encourage your poll voters to help spread the word.")
	            )
				
			)
	            );
	    }
	});

/***/ }
/******/ ]);