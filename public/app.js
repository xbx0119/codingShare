import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';


import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import store from './src/redux/store/store';
import { socketConnect } from './src/redux/action/socketAction';

import io from 'socket.io-client';


import RouterConfig from './src/router';


import Style from './css/base.scss';


class App extends React.Component {

	constructor(props) {
		super(props);
		const { dispatch, visibleTodos, visibilityFilter } = this.props;

		var socket = io('http://localhost:7000');

		socket.on('connect', function() {
			console.log("connected!")

            dispatch(socketConnect(socket))
		});

		console.log(store.getState())
	}

	render() {
		return (
			<RouterConfig />
		)
		
	}
};

App.contextTypes = { 
	store: PropTypes.object.isRequired 
}

function select(state) {
	return {
		socket: state.socket
	}
}

App = connect()(App)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


