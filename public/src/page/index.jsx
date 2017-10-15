import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import style from '../../css/index.scss';

class Login extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div id="index">
				<div className="content">					
					<div className="title">
						codingShare
					</div>
				</div>
			</div>
		)
	}
}

export default Login;