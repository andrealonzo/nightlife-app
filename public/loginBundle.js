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
	 ReactDOM.render(
	        React.createElement(Navigation, null),
	        document.getElementById('nav-container')
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
			      React.createElement("div", null, 
			        React.createElement("nav", {className: "navbar navbar-default"}, 
	   React.createElement("div", {className: "container"}, 
	    React.createElement("div", {className: "navbar-header"}, 
	      React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false"}, 
	        React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"})
	      ), 
	      React.createElement("a", {className: "navbar-brand", href: "/"}, "Urbane Dives")
	    ), 

	    React.createElement("div", {className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1"}, 
	      React.createElement("ul", {className: "nav navbar-nav"}, 
	        React.createElement("li", {className: "active"}, React.createElement("a", {href: "/"}, "Home ", React.createElement("span", {className: "sr-only"}, "(current)")))
	 
	      ), 
	      React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
	      React.createElement("li", null, this.state.user?React.createElement("a", {href: "/logout"}, "Logout"):React.createElement("a", {href: "#", "data-toggle": "modal", "data-target": "#myModal"}, "Login"))
	      )
	    )
	  )
	  
	), 
	React.createElement("div", {className: "modal fade", id: "myModal", tabIndex: "-1", role: "dialog", "aria-labelledby": "myModalLabel"}, 
	  React.createElement("div", {className: "modal-dialog", role: "document"}, 
	    React.createElement("div", {className: "modal-content"}, 
	      React.createElement("div", {className: "modal-header"}, 
	        React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), 
	        React.createElement("h4", {className: "modal-title text-center", id: "myModalLabel"}, "Log Into Urbane Dives")
	      ), 
	      React.createElement("div", {className: "modal-body text-center"}, 
	        React.createElement("a", {className: "btn btn-primary btn-lg", href: "/auth/github", role: "button"}, 
							React.createElement("img", {src: "/public/img/github_32px.png", alt: "github logo"}), 
							"LOGIN WITH GITHUB")
	      ), 
	      React.createElement("div", {className: "modal-footer"}
	      )
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

/***/ }
/******/ ]);