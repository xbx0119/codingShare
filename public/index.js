import React from 'react';
import ReactDOM from 'react-dom';


import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import store from './src/redux/store/store';

import App from './src/app'


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);


