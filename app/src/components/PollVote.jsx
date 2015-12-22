/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
        //find option
        var option = $.grep(this.props.poll.options, function(e){ return e._id === this.state.selectedOptionId; }.bind(this));
        console.log("submitting this option", option[0]);
       this.props.onSubmit(option[0]);
    },
    handleOnChange:function(e){
      this.setState({selectedOptionId:e.target.value});
      this.setState({disableSubmit:""});
    },
    getInitialState:function(){
        return {disableSubmit:"disabled"};
    },
    createOption:function(option, index){
        console.log('creating this option', option);
        return(
            <div key = {index} className="radio">
              <label>
                <input  type="radio" name="optionsRadios" id="optionsRadios1" value={option._id} onChange={this.handleOnChange}></input>
                {option.name}
              </label>
            </div>
            
            );
    },
    render:function(){
      return(
<div>
      
    <h1>{this.props.poll.name}</h1>
    <form onSubmit={this.handleSubmit}>
    <div className="text-left">
       {this.props.poll.options.map(this.createOption) }
    </div>
        <button type="submit" className="btn btn-primary btn-block" disabled={this.state.disableSubmit}>Vote</button>
    
        <div>Sorry no comments yet</div>
    </form>
</div>
        );
    }
  });