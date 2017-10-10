import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Style from './css/base.scss';


import Index from './src/page/index';
import Home from './src/page/home';


class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Router>
				<div id="wrapper">
					<Route exact path="/" component={Index} />
					<Route path="/home" component={Home} />
				</div>
			</Router>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


