import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import MainPanel from '../views/MainPanel';

import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<MainPanel />
			</div>
		)
	}
}

export default ThemeDecorator(App);
