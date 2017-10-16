import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import io from 'socket.io-client';

import keyEvent from '../../util/keyEvent';

import Style from '../../css/editor.scss';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: ''
		}
		var self = this;
		this.props.socket.on('code', function(data) {
			self.updateCode(data);
		});

	}

	handleFocus(e) {
		e.preventDefault();
		return false;
	}

	handleInput(e) {
		var data = e.target.value;
		this.updateCode(data);

		this.sendCode(data);
	}

	updateCode(data) {
		this.setState({
			code: data
		})
	}

	sendCode(data) {
		var socket = this.props.socket;
		
		if(this.props.login.user == this.props.room.creator) {
			socket.emit('code', data)
		}else {
			console.log("not room creator, not emit")
		}
	}


	render() {
		return (
			<div id="editor">
				<textarea ref="codearea" id="code" spellCheck="false" value={this.state.code}
					onClick={this.handleFocus} onChange={this.handleInput.bind(this)}>
				</textarea>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		socket: state.socket,
		login: state.login,
		room: state.room
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators({ }, dispatch)
// 	}
// }

export default connect(
	mapStateToProps 
	// mapDispatchToProps
)(Editor);
