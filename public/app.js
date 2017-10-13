import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Style from './css/base.scss';


import Index from './src/page/index';
import Home from './src/page/home';

import Sidebar from './src/components/sidebar';

import io from 'socket.io-client';


class App extends React.Component {
	constructor(props) {
		super(props);

		var socket = io('http://localhost:7000');
		socket.on('connect', function() {
			console.log("connected!")
		});
		this.state = {
			socket: socket
		}
	}

	render() {
		return (
			<Router>
				<div id="wrapper" ref="wrapper">
					<Sidebar socket={this.state.socket} />

					<Route exact path="/" component={Index} />
					<Route path="/home" render={() => <Home socket={this.state.socket} /> } />
				</div>
			</Router>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


