/** @jsx React.DOM */
'use strict'
var React = require('react')
var Chart = require('chart.js')
module.exports = React.createClass({
    getInitialState:function(){
        return {};
    },
    loadPoll:function(pollId){
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
               poll:data});
           this.loadChart();
                }.bind(this),
        error: function(data){
           console.log("error receiving data", data);
                }.bind(this),
        dataType: 'json'
      });
        
    },
    loadChart:function(){
         var labels = this.state.poll.options.map(function(option){
            return option.name;
        }.bind(this));
        var data = this.state.poll.options.map(function(option){
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
    componentDidMount:function(){
       this.loadPoll(this.props.poll._id);
    },
    render:function(){
      return(<div className="text-center">
        <h1>
       {this.props.poll.name}</h1>
      <canvas id="income" width="600" height="400" ></canvas>
      </div>
        );
    }
  });