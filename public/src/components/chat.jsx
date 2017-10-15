import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Style from '../../css/base.scss';


class Chat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="chat">
				chat
			</div>
		)
	}
}

export default connect()(Chat);