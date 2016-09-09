import React, { Component } from 'react';
export default class XMLPreview extends Component {
	constructor(props) {
    	super(props);
    }
	render(){
		
		
		
    var xmlArea = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<PHONE_CONFIG>
  <ALL 
`+this.props.text+`
  	/>
</PHONE_CONFIG>`
		var list = xmlArea.split(/(\n)/g).map(function(e, i){
			return (
				
				<p key={i}>{e}</p>

				)
		})
		
		return (

			<div id="displayFile" className="well">
			{list}
			</div>
			)
	}
}