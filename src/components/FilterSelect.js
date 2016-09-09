import React, { Component } from 'react';

export default class FilterSelect extends Component {
	constructor(props) {
    super(props);
    
  }
  render() {

  	
  	return(
  		<tr>
  			<th>
  		<select className="form-control">

  			{this.props.alltypes.map(function(e){
  				return (
  					<option key={e}>{e}</option>
  					)
  			})}
  		</select>
  		</th>
  		</tr>
  		)
  }
}