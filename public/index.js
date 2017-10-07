import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Control from './src/control';
import Editor from './src/editor';
import Chat from './src/chat';

import Style from './css/base.scss';

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
			<div id="wrapper">
				<Control />
				<Editor socket={this.state.socket} />
				<Chat />
			</div>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById("root")
);