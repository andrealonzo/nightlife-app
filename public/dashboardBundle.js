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
	var PollApp = __webpack_require__(4)
	 ReactDOM.render(
	        React.createElement(Navigation, null),
	        document.getElementById('nav-container')
	        );
	ReactDOM.render(
	      React.createElement(PollApp, null),
	      document.getElementById('pollApp')
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3);
	var NewPoll = __webpack_require__(5);
	var MyPolls = __webpack_require__(6);
	var PollAddSuccess = __webpack_require__(7);
	module.exports =  React.createClass({displayName: "module.exports",
	  getMyPage:function(){
	    console.log("in here");
	  },
	  getInitialState: function() {
	      return { showPage: "newPoll" };
	  },
	  handleNewPollClick: function() {
	      this.setState({ showPage: "newPoll" });
	  },
	  handleMyPollsClick: function() {
	      this.setState({ showPage: "myPolls" });
	  },
	  handleAddNewPoll:function(poll){
	    this.setState({pollId:poll._id, showPage:"addedNewPoll"});
	    console.log("newPollAdded", poll);
	  },
	  render:function(){
	    return(
	      React.createElement("div", null, 
	        React.createElement("div", {className: "jumbotron"}, 
	          React.createElement("h1", null, "Dashboard"), 
	          React.createElement("p", null, 
	            "What would you like to do today?"
	          ), 
	          React.createElement("p", null, 
	            React.createElement("a", {className: "btn btn-primary btn-lg", onClick: this.handleNewPollClick, role: "button"}, "New Poll"), 
	            React.createElement("a", {className: "btn btn-primary btn-lg", onClick: this.handleMyPollsClick, role: "button"}, "My Polls")
	          )
	        ), 
	        React.createElement("div", {className: "row"}, 
	        React.createElement("div", {className: "col-md-4"}), 
	        React.createElement("div", {className: "col-md-4"}, 
	        
	         
	          this.state.showPage === "newPoll" ? React.createElement(NewPoll, {onAddNewPoll: this.handleAddNewPoll})  : 
	          this.state.showPage === "myPolls" ? React.createElement(MyPolls, null) : 
	          React.createElement(PollAddSuccess, {pollId: this.state.pollId})
	        ), 
	        React.createElement("div", {className: "col-md-4"})
	        
	        
	        )
	      )
	      
	      );
	  }
	  
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3);
	module.exports = React.createClass({displayName: "module.exports",
	    handleOptionChange:function(optionsIndex, event){
	      this.state.poll.options[optionsIndex].name = event.target.value;
	      this.setState(this.state.poll.options);
	      //checks if all fields are filled in
	      this.validate();
	    },
	    createOption:function(option, index) {
	      return  React.createElement("input", {type: "text", key: index, className: "form-control", id: "option", onChange: this.handleOptionChange.bind(this,index), placeholder: option.placeholder, value: this.state.poll.options[index].name})
	    },
	    handleOptionsClick:function(e){
	      e.preventDefault();
	      var newOption = {placeholder:'New Option', id:this.state.poll.options.length, name:""};
	      this.state.poll.options.push(newOption);
	      this.setState(this.state.poll.options);
	      this.validate();
	    },
	    handleSubmit:function(e){
	      e.preventDefault();
	      this.setState({showPage:"newPollAdded"});
	      var pollApiUrl = "/api/15024773/polls";
	      console.log("about to post this poll", JSON.stringify(this.state.poll));
	      $.ajax({
	          type: "POST",
	          url: pollApiUrl,
	          data: JSON.stringify(this.state.poll),
	          contentType: "application/json",
	          success: function(data){
	                      this.props.onAddNewPoll(data);
	                  }.bind(this),
	          dataType: 'json'
	        });
	    },
	    handlePollNameChange:function(e){
	      this.state.poll.name = e.target.value;
	      this.setState(this.state.poll);
	      this.validate();
	      
	     },
	     isPollNameFilled:function(){
	       return( this.state.poll.name.trim() != "");
	     },
	     areOptionsFilled:function(){
	       var allOptionsFilled = true;
	       this.state.poll.options.map(
	         function(option, index){
	           console.log(option);
	          if(option.name.trim()=="")
	            allOptionsFilled = false;
	       });
	       return allOptionsFilled;
	     },
	     validate:function(){

	      if(this.isPollNameFilled() && this.areOptionsFilled() ){
	        if(this.state.disableSubmit == "disabled"){
	          this.setState({disableSubmit : "" });
	        }
	      }
	      else{
	        if(this.state.disableSubmit == ""){
	          this.setState({disableSubmit: "disabled" });
	        }
	      }
	     },
	    getInitialState: function() {
	      
	      
	       return {disableSubmit:"disabled",
	           poll:{name:"",
	           options: 
	             [{placeholder:'Coke', name:""}, 
	             {placeholder:'Pepsi', name:""}]
	           }
	       };
	    },
	    render:function(){
	      return(React.createElement("div", null, 
	      
	        React.createElement("h1", null, "New Poll"), 
				    React.createElement("form", {onSubmit: this.handleSubmit}, 
	  React.createElement("div", {className: "form-group"}, 
	    React.createElement("label", {htmlFor: "name"}, "Name your poll"), 
	    React.createElement("input", {type: "text", className: "form-control", id: "name", placeholder: "What is your favorite brand?", onChange: this.handlePollNameChange, value: this.state.poll.name})
	  ), 
	   React.createElement("div", {className: "form-group"}, 
	        React.createElement("label", {htmlFor: "options"}, "Options"), 
	        this.state.poll.options.map(this.createOption)
	      ), 
	  React.createElement("div", {id: "optionsButtonWrapper"}, 

	React.createElement("button", {type: "button", className: "btn btn-default  btn-block", onClick: this.handleOptionsClick}, "More Options")
	  ), 
	  React.createElement("div", null, 
	  React.createElement("button", {type: "submit", className: "btn btn-primary  btn-block", disabled: this.state.disableSubmit}, "Submit")
	  )
	)
	)
	        );
	    }
	  });

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3);
	var pollAppUrl = window.location.origin;
	module.exports = React.createClass({displayName: "module.exports",
	    loadPolls: function(){
	      var pollApiUrl = "/api/15024773/polls";
	      $.getJSON( pollApiUrl, 
	          function(data){
	             this.setState({polls:data});
	          }.bind(this)
	      );
	    },
	    getInitialState: function() {
	      return {polls:[]};
	          
	    },
	    componentDidMount:function(){
	      this.loadPolls();
	    },
	    createPoll:function(poll, index){
	      return(
	         React.createElement("li", {key: index, className: "list-group-item text-right"}, 
	         React.createElement("a", {href: pollAppUrl + "/vote?id="+poll._id, target: "_blank"}, 
	          React.createElement("div", {className: "pull-left"}, poll.name)
	        ), 
	          React.createElement("button", {type: "button", onClick: this.handleDeletePollClick.bind(this,poll), className: "btn btn-danger"}, 
	     "delete" 
	          )
	          )
	         );
	    },
	    handleDeletePollClick:function(poll){
	      var pollApiUrl = "/api/15024773/polls";
	      $.ajax({
	                url:  pollApiUrl,
	                dataType: 'json',
	                data: poll,
	                type: 'DELETE',
	                success:  function(successData){
	                 this.loadPolls();
	                }.bind(this)
	      }
	      );
	    },
	    render:function(){
	      return(
	        React.createElement("ul", {className: "list-group text-left"}, 
	         this.state.polls.map(this.createPoll)
	        )
	        );
	    }
	  });

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(3);
	var pollAppUrl = window.location.origin;
	module.exports = React.createClass({displayName: "module.exports",
	  getInitialState:function(){
	    return{pollUrl:null};
	  },
	  render:function(){
	    var pollUrl = pollAppUrl + "/vote?id="+this.props.pollId;
	    return(
	      React.createElement("div", null, 
	      React.createElement("h1", null, "Congratulations!  Your poll has been created.  Access your poll below"), 
	      React.createElement("a", {target: "_blank", href: pollUrl}, 
	      pollUrl
	      )
	      )
	      );
	  }
	});


/***/ }
/******/ ]);