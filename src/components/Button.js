import React, { Component } from 'react';

export default class Buttons extends Component {
	constructor(props) {
    	super(props);
    	
    }
    
    render(){
    	return(
            <button onClick={this.props.setParams} id="prebuilt" className="premade btn btn-danger" data-params={this.props.params} data-val={this.props.num} data-toggle="tooltip" data-placement="top" title={this.props.tooltip}>{this.props.name}</button>
            )
    }
   }
