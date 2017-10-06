import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './src/header';
import Editor from './src/editor';

class App extends React.Component {
	render() {
		return (
			<div id="wrapper">
				<Header />
				<Editor />
			</div>
		)
	}
};

ReactDOM.render(
	<App />,
	document.getElementById("root")
);