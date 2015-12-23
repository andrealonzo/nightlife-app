/** @jsx React.DOM */
'use strict'
var React = require('react')
var Chart = require('chart.js')
module.exports = React.createClass({
    getInitialState:function(){

        return {};
    },
    loadPoll:function(){
        
    },
    componentDidMount:function(){
        var labels = this.props.poll.options.map(function(option){
            return option.name;
        }.bind(this));
        var data = this.props.poll.options.map(function(option){
            return option.numVotes;
        }.bind(this));
        var barData = {
        	labels : labels,
        	datasets : [
        		{
        			fillColor : "#48A497",
        			strokeColor : "#48A4D1",
        			data : data
        		}
        	]
        }   
        var income = document.getElementById("income").getContext("2d");
        Chart.defaults.global.responsive = true;
        new Chart(income).Bar(barData);
    },
    render:function(){
      return(<div className="text-center">
        <h1>
       {this.props.poll.name}</h1>
      <canvas id="income" width="600" height="400" value = {this.props.poll} ></canvas>
      </div>
        );
    }
  });