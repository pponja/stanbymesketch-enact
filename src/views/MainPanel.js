import React from 'react';
import {Panel} from '@enact/sandstone/Panels';
import Canvas from '../components/canvas/Canvas'

class MainPanel extends React.Component {
	render() {
		return (
			<Panel>
				<Canvas />
			</Panel>
		)
	}
}

export default MainPanel;
