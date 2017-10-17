import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showModel, closeModel } from '../redux/action/modelAction';

import RoomList from './roomList';
import Search from './search';
import Menu from './menu';

import headimg from '../../images/head.jpg';


class Control extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: false
		}
	}

	toggleMenu() {
		this.setState({
			menu: !this.state.menu
		})
		console.log(this.state)
	}

	render() {
		return (
			<div id="control">
				<div className="head">
					<div className="personinfo">
						<img className="headimg" src={headimg} />
						<p className="name">博勋</p>
						<i className="option iconfont icon-settings" ref="option_button" onClick={this.toggleMenu.bind(this)}></i>
						<Menu show={this.state.menu} />
					</div>
					<Search />
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
