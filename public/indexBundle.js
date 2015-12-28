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
	var MainApp = __webpack_require__(4)
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3)

	module.exports =  React.createClass({displayName: "module.exports",
	    render:function(){
	        return(
	            React.createElement("div", null, 
			    React.createElement("div", {className: "jumbotron searchBox text-center"}, 
			    React.createElement("div", {className: "container "}, 
	              React.createElement("h2", null, "Find the best night clubs and bars in San Diego"), 
	              React.createElement("form", {className: "form-inline"}, 
	                  React.createElement("div", {className: "form-group"}, 
	                    React.createElement("input", {type: "text", className: "form-control", id: "exampleInputName2", placeholder: "Find a bar or nightclub"})
	                  ), 
	                  React.createElement("div", {className: "form-group"}, 
	                    React.createElement("input", {type: "text", className: "form-control", id: "exampleInputName2", placeholder: "Near address, neighborhood, city, state, or zip"})
	                  ), 
	                  React.createElement("button", {className: "btn btn-danger ", type: "submit", role: "button"}, "Search")
	                )
	            )
	            ), 
	            
	React.createElement("div", {className: "container"}, 
	            React.createElement("div", {className: "row text-left"}, 
	                React.createElement("div", {className: "col-md-3"}
	                ), 
	                React.createElement("div", {className: "col-md-6"}, 
	                React.createElement("div", {className: "panel panel-default business"}, 
	                      React.createElement("div", {className: "panel-body"}, 
	                    React.createElement("div", {className: "pull-left"}, 
	                    
	                    React.createElement("img", {src: "http://s3-media2.fl.yelpcdn.com/bphoto/sXG06Ss46cwO_lu1NvnBhw/ms.jpg", className: "img-rounded"})
	                    ), 
	                    React.createElement("div", {className: "business-name"}, 
	                    "Pitchers"
	                    ), 
	                    React.createElement("div", {className: "business-address"}, 
	                
	                        React.createElement("div", null, "9926 Carmel Mountain Rd"), 
	                        React.createElement("div", null, "San Diego, CA 92129"), 
	                        React.createElement("div", null, "(858) 484-3777")
	                    )
	                    ), 
	                    
	                    React.createElement("div", null, 
	                    React.createElement("img", {className: "img-rounded", src: "//s3-media4.fl.yelpcdn.com/photo/bdQAQk7m_JhjKQ0mpWI0bw/30s.jpg"})
	                    ), 
	                    React.createElement("div", null, 
	                    "\"I love this place. If you are looking for a chill, local sports bar that borders on dive, this is your place. Located in a strip mall, there is plentiful...\""
	                    )
	                    )
	                
	                 ), 
	                React.createElement("div", {className: "col-md-3"}
	                )
	            )
				
			)
			)
	            );
	    }
	});

/***/ }
/******/ ]);