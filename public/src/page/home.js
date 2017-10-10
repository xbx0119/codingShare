import React from 'react';

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Control from '../components/control';
import Editor from '../components/editor';
import Chat from '../components/chat';

import Style from '../../css/home.scss';

import io from 'socket.io-client';

class Home extends React.Component {
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
			<div id="home">
				<div className="content">
					<Control />
					<Editor socket={this.state.socket} />
					<Chat />
				</div>
			</div>
		)
	}
};

export default Home;