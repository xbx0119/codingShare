import React from 'react';

import { BrowserRouter as Router, Route, Link,} from 'react-router-dom';

import { connect } from 'react-redux'


import Index from './page/index';
import Home from './page/home';
import Sidebar from './components/sidebar';


class RouterConfig extends React.Component{
	constructor(props) {
		super(props);
		console.log(this.context.store)
	}

	render() {
		return (
			<Router>
				<div id="wrapper" ref="wrapper">
					<Sidebar />

					<Route exact path="/" component={Index} />
					<Route path="/home" component={Home} />
				</div>
			</Router>
		)
	}
}

export default connect()(RouterConfig);