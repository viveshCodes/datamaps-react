import React from 'react';

import Datamap from './Datamap';
import Helper from './Helper';

export default class Map extends React.Component {

	render() {
		return (
			<Helper label="Bubbles">
				<Datamap

				    scope={'usa'}
					height={700}
					geographyConfig={{
						popupOnHover: true,
               			highlightOnHover: true,
                		borderColor: '#444',
                		borderWidth: 0.5,
               			dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/usa.topo.json'
					}}
					fills={{
						'MAJOR': '#306596',
						'MEDIUM': '#0fa0fa',
						'MINOR': '#bada55',
						 defaultFill: '#dddddd'
					}}

	
				/>
			</Helper>
		);
	}

}