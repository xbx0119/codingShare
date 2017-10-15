import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import io from 'socket.io-client';

import { closeModel } from '../redux/action/modelAction';


class Addroom extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			passwd: '',
			intro: ''
		}
	}

	addRoom() {
		var self = this;
		this.props.socket.emit('addroom', {
			name: this.state.name,
			passwd: this.state.passwd,
			intro: this.state.intro
		});


		this.props.socket.on('addroom', function(data) {
			if(data == "true") {
				self.props.actions.closeModel();
			}
		})
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	render() {
		return(
			<div className="addroom">
				<div>
					<input type="text" name="name" placeholder="room name" onChange={this.handleChange.bind(this)} />
					<input type="text" name="passwd" placeholder="password" onChange={this.handleChange.bind(this)} />
					<input type="text" name="intro" placeholder="intro" onChange={this.handleChange.bind(this)} />
					<input type="submit" value="add new room" onClick={this.addRoom.bind(this)} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		socket: state.socket
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ closeModel }, dispatch)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Addroom);
