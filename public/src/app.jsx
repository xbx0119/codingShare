import React from 'react';
import ReactDOM from 'react-dom';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { socketConnect } from './redux/action/socketAction';

import io from 'socket.io-client';


import RouterConfig from './router';


import Style from '../css/base.scss';


class App extends React.Component {

	constructor(props) {
		super(props);
		var self = this;
		var socket = io('http://localhost:7000');

		socket.on('connect', function() {
			console.log("connected!")
           self.props.actions.socketConnect(socket);
		});
	}

	render() {
		return (
			<RouterConfig />
		)
		
	}
};


function mapStateToProps(state) {
	return {
		socket: state.socket
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ socketConnect }, dispatch)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App);

