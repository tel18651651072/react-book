import React from 'react';
var Title=React.createClass({
	render() {
		return (
			<div>
			   <div className="title-wrapper">
			      <span>{this.props.title}</span>
			   </div>
			</div>
			)
	}
});
export default Title