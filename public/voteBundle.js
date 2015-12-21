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
	var Ballot = __webpack_require__(8)
	var pollId = getUrlVars().id;
	 ReactDOM.render(
	        React.createElement(Navigation, null),
	        document.getElementById('nav-container')
	        );
	ReactDOM.render(
	      React.createElement(Ballot, {id: pollId}),
	      document.getElementById('ballot')
	      );
	      
	// Read a page's GET URL variables and return them as an associative array.
	function getUrlVars()
	{
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}

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
	        React.createElement("li", null, React.createElement("a", {href: "/login"}, "Signup")), 
	        React.createElement("li", null, React.createElement("a", {href: "/login"}, "Login"))
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3)
	var PollVote = __webpack_require__(9)
	module.exports =  React.createClass({displayName: "module.exports",
	    loadPoll:function(){
	     var pollId = this.props.id;
	     
	      var pollApiUrl = "/openapi/getPoll";
	        console.log("loading poll " + pollId);
	         $.ajax({
	          type: "GET",
	          url: pollApiUrl,
	          data: {id:pollId},
	          contentType: "application/json",
	          success: function(data){
	             console.log("data successfully retrieved", data);
	             this.setState({
	                 poll:data
	              });
	             
	                  }.bind(this),
	          error: function(data){
	             console.log("error receiving data", data);
	                  }.bind(this),
	          dataType: 'json'
	        });
	    },
	    componentDidMount:function(){
	      this.loadPoll();
	    },
	    handlePollSubmit:function(optionSelected){
	        var voteApiUrl = "/api/vote";
	        console.log("poll submitted",optionSelected);
	        console.log("poll state",this.state);
	        var vote = {name:this.state.poll.name, optionSelected: optionSelected};
	         $.post( voteApiUrl, vote, 
	          function(data){
	              console.log("Vote successfully submitted", data);
	          }.bind(this));
	    },
	    
	      getInitialState: function() {
	          return { 
	              poll:{
	                  name:'',
	                  options:[{name:''}]
	              } };
	      },
	      render:function(){
	        return(
	          React.createElement("div", null, 
	            React.createElement("div", {className: "row"}, 
	            React.createElement("div", {className: "col-md-4"}), 
	            React.createElement("div", {className: "col-md-4"}, 
	            React.createElement(PollVote, {poll: this.state.poll, onSubmit: this.handlePollSubmit})
	            ), 
	            React.createElement("div", {className: "col-md-4"})
	            )
	          )
	      
	      );
	  }
	  
	});
	 
	  

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3)
	module.exports = React.createClass({displayName: "module.exports",
	    handleSubmit:function(e){
	        e.preventDefault();
	       this.props.onSubmit(this.state.selectedOption);
	    },
	    handleOnChange:function(e){
	      this.setState({selectedOption:e.target.value});
	    },
	    createOption:function(option, index){
	        return(
	            React.createElement("div", {key: index, className: "radio"}, 
	              React.createElement("label", null, 
	                React.createElement("input", {type: "radio", name: "optionsRadios", id: "optionsRadios1", value: option, onChange: this.handleOnChange}), 
	                option.name
	              )
	            )
	            
	            );
	    },
	    render:function(){
	      return(
	React.createElement("div", null, 
	      
	    React.createElement("h1", null, this.props.poll.name), 
	    React.createElement("form", {onSubmit: this.handleSubmit}, 
	    React.createElement("div", {className: "text-left"}, 
	       this.props.poll.options.map(this.createOption)
	    ), 
	        React.createElement("button", {type: "submit", className: "btn btn-primary btn-block"}, "Vote"), 
	    
	        React.createElement("div", null, "Sorry no comments yet")
	    )
	)
	        );
	    }
	  });

/***/ }
/******/ ]);