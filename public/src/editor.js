import React from 'react';


import Style from '../css/editor.scss';

class Editor extends React.Component {
	constructor(props) {
		super(props);
	}

	handleFocus(e) {
		e.preventDefault();
		return false;
	}

	render() {
		return (
			<textarea id="editor" spellCheck="false" onClick={this.handleFocus}>
				
			</textarea>
		)
	}
}

export default Editor;