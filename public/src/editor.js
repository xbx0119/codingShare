import React from 'react';


import Style from '../css/editor.scss';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		var self = this;
		props.socket.on('code', function(data) {
			console.log("get code" + data)
			self.updateCode(data);
		});

	}

	handleFocus(e) {
		e.preventDefault();
		return false;
	}

	updateCode(code) {
		this.refs.codearea.value += code;
	}

	sendCode(e) {
		// console.log(e.keyCode)
		var socket = this.props.socket;

		socket.emit('code', String.fromCharCode(e.keyCode))
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

export default Editor;