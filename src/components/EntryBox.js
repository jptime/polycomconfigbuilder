import React, { Component } from 'react';
import XMLPreview from './xmlPreview'
import PremadeConfigs from './PremadeConfigs'
import Values from '../pcomconfigs/temp.js';
export default class EntryBox extends Component {
	constructor(props) {
    	super(props);
    	this.state = Values;
    	this.handleChange = this.handleChange.bind(this)
    	this.saveFile = this.saveFile.bind(this)
  }

  	handleChange(event){
  		this.setState({values: event.target.value})
  	}
  	saveFile(){
  		
  		var text = $("#displayFile").text();
	  	var filename = $("#theFileName").val()
	  	var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
	  	saveAs(blob, filename+".cfg");
  	}
  	 render() {

    return ( 
    	<div>
    		<div className="row text-center">
    			<div className="col-md-12">
    				<h1>Polycom Configuration Builder</h1>
    			</div>
    		</div>
    		<div className="row text-center well">
      		<div className = "col-md-6" >
      			<h2> Enter Config Parameters</h2> 
       	 		<textarea id="entryBox" rows="12" cols="60"type = "text"
	          value = {this.state.values}
	          onChange = {this.handleChange} className="form-control"/> 

	        	<div className="well text-left">
	        		<h2 className="text-center">Prebuilt Configs </h2>
	          		<PremadeConfigs updateView={this.handleChange}/>
        		</div>
        	</div> 
        	<div className = "col-md-6" >
		      <h2> Preview </h2> 
		      <form className="form-inline">
			      <div className="form-group">
				      <div className="input-group">
					      <input placeholder="Enter Filename Here" id="theFileName" className="form-control"/>
					      <div className="input-group-addon">.cfg</div>
				      </div>
				      <button onClick={this.saveFile} className="form-control btn btn-success">Save</button>
			      </div>
			  </form>
          <div className="panel panel-default text-left">
            <XMLPreview text = {this.state.values}/> 

          </div>
        </div> 
      </div>
      <div className="row">
      	<div className="col-md-6">
      		
      	</div>
      </div>
      </div>
    )
  }
}