import React from 'react';

import ajax from '../../util/ajax';

import { connect } from 'react-redux'

import io from 'socket.io-client';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			passwd: ''
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	dologin() {
		var self = this;
		console.log(this.state.user + ": " + this.state.passwd)
		// this.props.login()

		this.props.socket.emit('login', JSON.stringify({
			user: this.state.user,
			passwd: this.state.passwd
		}));

		this.props.socket.on('login', function(data) {
			console.log(true)
			if(data == "true") {
				self.props.login();
				self.props.close();
			}
		})
	}

	render() {
		return(
			<div className="login">
				<div>
					<input type="text" name="user" placeholder="username" onChange={this.handleChange.bind(this)}/>
					<input type="text" name="passwd" placeholder="password" onChange={this.handleChange.bind(this)}/>
					<input type="submit" value="login" onClick={this.dologin.bind(this)}/>
				</div>
			</div>
		)
	}
}

function select(state) {
	return {
		login: state.login

	}
}

export default connect()(Login);