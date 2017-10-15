import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import io from 'socket.io-client';

import keyEvent from '../../util/keyEvent';

import Style from '../../css/editor.scss';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		var self = this;
		this.props.socket.on('code', function(data) {
			console.log("get code" + data)
			self.updateCode(data);
		});

	}

	handleFocus(e) {
		e.preventDefault();
		return false;
	}

	updateCode(code) {
		// this.refs.codearea.value += code;
		// var e = new keyEvent('KeyboardEvent');
		var e = document.createEvent('KeyboardEvent')
		e.initKeyboardEvent('keydown', true, true, document.defaultView, "a", 0, "", 0);
		this.refs.codearea.dispatchEvent(e)
		console.log("update!")
	}

	sendCode(e) {
		// console.log(e.keyCode)
		var socket = this.props.socket;
		
		console.log(this.props.login.user)
		console.log(this.props.room.creator)
		if(this.props.login.user == this.props.room.creator) {
			console.log('key down')
			socket.emit('code', e.keyCode)
		}else {
			console.log("room creator, not emit")
		}
	}


	render() {
		return (
			<div id="editor">
				<textarea ref="codearea" id="code" spellCheck="false" onClick={this.handleFocus} onKeyDown={this.sendCode.bind(this)}>
					
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
