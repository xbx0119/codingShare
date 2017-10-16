import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import io from 'socket.io-client';

import { login, logout } from '../redux/action/loginAction';
import { closeModel } from '../redux/action/modelAction';


class Login extends React.Component {
	constructor(props) {
		super(props);
		
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	dologin() {
		var self = this;

		this.props.socket.emit('login', JSON.stringify({
			user: this.state.user,
			passwd: this.state.passwd
		}));

		this.props.socket.on('login', function(data) {
			if(data == "true") {
				self.props.actions.login({
					user: self.state.user, 
					passwd: self.state.passwd
				});
				self.props.actions.closeModel();
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

function mapStateToProps(state) {
	return {
		login: state.login,
		socket: state.socket
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ login, logout, closeModel }, dispatch)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Login);
