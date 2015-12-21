/** @jsx React.DOM */
'use strict'
var React = require("react");
module.exports = React.createClass({
    handleOptionChange:function(optionsIndex, event){
       this.state.poll.options[optionsIndex].value = event.target.value;
      this.setState(this.state.poll.options);
    },
    createOption:function(option, index) {
      return  <input type="text" key={index} className="form-control" id="option"  onChange = {this.handleOptionChange.bind(this,index)} placeholder={option.placeholder} value = {this.state.poll.options[index].value}/>
    },
    handleOptionsClick:function(e){
      e.preventDefault();
      var newOption = {placeholder:'New Option', id:this.state.poll.options.length, value:""};
      this.state.poll.options.push(newOption);
      this.setState(this.state.poll.options);
    },
    handleSubmit:function(e){
      this.setState({showPage:"newPollAdded"});
      var pollApiUrl = "/api/15024773/polls";
      e.preventDefault();
      $.post( pollApiUrl, this.state.poll, 
          function(data){
              this.props.onAddNewPoll(data);
          }.bind(this));
    },
    handlePollNameChange:function(e){
      this.state.poll.name = e.target.value;
      this.setState(this.state.poll);
    },
    getInitialState: function() {
      return {
          poll:{name:"",
          options: 
            [{placeholder:'Coke', value:""}, 
            {placeholder:'Pepsi', value:""}]
          }
      };
    },
    render:function(){
      return(<div>
      
        <h1>New Poll</h1>
			    <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label htmlFor="name">Name your poll</label>
    <input type="text" className="form-control" id="name" placeholder="What is your favorite brand?" onChange={this.handlePollNameChange} value={this.state.poll.name}/>
  </div>
   <div className="form-group">
        <label htmlFor="options">Options</label>
        {this.state.poll.options.map(this.createOption)}
      </div>
  <div id = "optionsButtonWrapper">

<button type="button" className="btn btn-default  btn-block" onClick={this.handleOptionsClick}>More Options</button>
  </div>
  <div>
  <button type="submit" className="btn btn-primary  btn-block">Submit</button>
  </div>
</form>
</div>
        );
    }
  });