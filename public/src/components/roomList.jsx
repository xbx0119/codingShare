import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { enterRoom } from '../redux/action/roomAction';


class Room extends React.Component {
	constructor(props) {
		super(props);
	}

	enterRoom() {
		this.props.actions.enterRoom({ id: this.props.id, creator: this.props.creator})
		console.log("enter" + this.props.id)

		this.props.socket.emit('enterroom', this.props.id);
	}

	render() {
		return (
			<li onClick={this.enterRoom.bind(this)}>
				<h2>{this.props.id} {this.props.name}</h2>
				<p>{this.props.intro}</p>
				<i>{this.props.password == '' ? 'x' : '!'}</i>
			</li>
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
		actions: bindActionCreators({ enterRoom }, dispatch)
	}
}

Room = connect(
	mapStateToProps,
	mapDispatchToProps
)(Room);


class RoomList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: []
		}
		var self = this;
		this.props.socket.emit('getRooms');
		this.props.socket.on('getRooms', function(data) {
			self.setState({
				rooms: data
			})
		});

		this.props.socket.on('newroom', function(data) {
			self.setState({
				rooms: data
			})
		})
	}

	componentWillUpdate(nextProps) {
		
	}

	render() {
		return (
			<ul>
				{this.state.rooms.map((item) => {
					return <Room key={item.id} id={item.id} name={item.name} intro={item.intro} passwd={item.passwd} creator={item.creatorname} />
				})}
			</ul>
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
		actions: bindActionCreators({ enterRoom }, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomList);
