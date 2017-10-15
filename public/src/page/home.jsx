import React from 'react';

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Control from '../components/control';
import Editor from '../components/editor';
import Chat from '../components/chat';

import Style from '../../css/home.scss';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home">
				<div className="content">
					<Control />
					<Editor />
					<Chat />
				</div>
			</div>
		)
	}
};

export default connect()(Home);
