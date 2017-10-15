import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showModel, closeModel } from '../redux/action/modelAction';

import RoomList from './roomList';


class Control extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	addRoom() {
		this.props.actions.showModel('addroom')
		console.log("add room");
	}

	render() {
		return (
			<div id="control">
				<div className="head">
					username

					<i className="iconfont icon-add" onClick={this.addRoom.bind(this)}></i>
				</div>
				<div className="content sp-scrollbar">
					<RoomList />
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
		actions: bindActionCreators({ showModel, closeModel }, dispatch)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Control);
