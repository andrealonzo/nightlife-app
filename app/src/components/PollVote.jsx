/** @jsx React.DOM */
'use strict'
var React = require('react')
module.exports = React.createClass({
    handleSubmit:function(e){
        e.preventDefault();
       this.props.onSubmit(this.state.selectedOption);
    },
    handleOnChange:function(e){
      this.setState({selectedOption:e.target.value});
    },
    createOption:function(option, index){
        return(
            <div key = {index} className="radio">
              <label>
                <input  type="radio" name="optionsRadios" id="optionsRadios1" value={option} onChange={this.handleOnChange}></input>
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
        <button type="submit" className="btn btn-primary btn-block">Vote</button>
    
        <div>Sorry no comments yet</div>
    </form>
</div>
        );
    }
  });