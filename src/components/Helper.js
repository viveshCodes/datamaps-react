import React from 'react';

export default class Example extends React.Component {

	render() {
		return (
			<div className="map">
					{React.Children.only(this.props.children)}				
			</div>
		);
	}

}