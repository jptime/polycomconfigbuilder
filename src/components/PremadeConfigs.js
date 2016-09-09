import React, { Component } from 'react';
import Configs from '../pcomconfigs/pcomconfigs.js'
import Buttons from './Button'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import Button from 'react-bootstrap/lib/Button'
export default class PremadeConfigs extends Component {
	constructor(props) {
    	super(props);
    	this.fillParams = this.fillParams.bind(this)
    }
   	fillParams(e){
   		var input = $(e.target).attr('data-params')
   		//$("#entryBox").val(input.replace(/\,/g,"\n"))
   		var a = {target: {value: input.replace(/\,/g,"\n")}}
   		//a.target.value = input.replace(/\,/g,"\n")
   		this.props.updateView(a)
   	}
    render(){
    	var params = this.fillParams
    	 $('[data-toggle="tooltip"]').tooltip()
    	var AllButtons = Configs.map(function(e,i){
    		var tooltip = (<Tooltip id={e.name}>{e.desc}</Tooltip>)
    		return(
    			<OverlayTrigger placement="top" overlay={tooltip} key={i} >
    					<Button onClick={params} data-params={e.params} className="premade" bsStyle="danger">{e.name}</Button>
    				
    			</OverlayTrigger>
    			)
    	})
    	return (
    		<div>
    		{AllButtons}
    		
    		</div>
    		)
    }
   }

////<Buttons tooltip={e.desc}setParams={params} params={e.params} key={i} num={i} name={e.name}/>