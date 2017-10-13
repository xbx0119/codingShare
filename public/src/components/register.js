import React from 'react';

class Register extends React.Component {
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

	doregister() {
		console.log(this.state.user + ": " + this.state.passwd)
	}

	render() {
		return(
			<div className="register">
				<div>
					<input type="text" name="user" placeholder="username" onChange={this.handleChange.bind(this)}/>
					<input type="text" name="passwd" placeholder="password" onChange={this.handleChange.bind(this)}/>
					<input type="submit" value="register" onClick={this.doregister.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default Register;