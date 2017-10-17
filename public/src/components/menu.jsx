import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import style from '../../css/menu.scss';

import { showModel, closeModel } from '../redux/action/modelAction';


class Menu extends React.Component {
	constructor(props) {
		super(props);
		
	}

	ClickOption(kind) {
		switch(kind) {
			case 'addroom':
				this.addRoom();
				break;
			default: 
				console.log("default")
		}
	}

	addRoom() {
		this.props.actions.showModel('addroom')
		console.log("add room");
	}

	render() {
		return (
			<div className={this.props.show ? "option_menu" : "option_menu hide_menu"}>
				<div className="arrow"></div>
				<div className="options" ref="menu_options">
					<ul>
						<li onClick={this.ClickOption.bind(this, 'addroom')}><i className="iconfont icon-comment"></i>发起直播</li>
						<li onClick={this.ClickOption.bind(this)}><i className="iconfont icon-favor"></i>我的收藏</li>
						<li onClick={this.ClickOption.bind(this)}><i className="iconfont icon-friend"></i>我的朋友</li>
						<li onClick={this.ClickOption.bind(this)}><i className="iconfont icon-share"></i>我的分享</li>
					</ul>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		model: state.socket
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
)(Menu);
