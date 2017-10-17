import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="chat">
				
			</div>
		)
	}
}

export default connect()(Chat);