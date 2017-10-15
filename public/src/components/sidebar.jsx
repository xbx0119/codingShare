import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Model from './model';

import iconfont from '../../css/iconfont.scss';
import style from '../../css/sidebar.scss';


import { toggleSidebar } from '../redux/action/sidebarAction';
import { login, logout } from '../redux/action/loginAction';
import { showModel, closeModel } from '../redux/action/modelAction';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		var self = this;
		window.addEventListener('click', function(e) {
			var elem = ReactDOM.findDOMNode(self);
			if(self.props.sidebar) {
				var curr = e.target;
				while(curr != elem) {
					if(curr != null) {
						curr = curr.parentNode;
					}else {
						self.toggleMenu();
						break;
					}
				}
			}
		})
	}

	toggleMenu() {
		console.log(this.props)
		const sidebar = this.refs.sidebar;
		this.props.actions.toggleSidebar()
	}

	checkLogin2getNavUl() {
		const isLogin = this.props.login.state;

		if(!isLogin) {
			return(
				<ul>
					<li><Link to='/'>Index</Link></li>
					<li onClick={this.showModel.bind(this, 'login')}>Login</li>
					<li onClick={this.showModel.bind(this, 'register')}>Register</li>
					<li><Link to='/home'>Home</Link></li>
				</ul>
			)
		}else {
			return(
				<ul>
					<li><Link to='/'>Index</Link></li>
					<li><Link to='/home'>Home</Link></li>
					<li onClick={this.logout.bind(this)}>Log out</li>
				</ul>
			)
		}
	}

	logout() {
		this.props.actions.logout()
	}



	showModel(kind) {
		this.props.actions.showModel(kind);
	}
	closeModel() {
		this.props.actions.closeModel('');
	}


	render() {
		return(
			<div>
				<i className="navbutton iconfont icon-menu" onClick={this.toggleMenu.bind(this)}></i>
				<div className={this.props.sidebar ? "sidebar show-sidebar" : "sidebar hide-sidebar"} ref="sidebar">
					<h2 className="menu" onClick={this.toggleMenu.bind(this)}><i className="iconfont icon-menu"></i>CodingShare</h2>
					{this.checkLogin2getNavUl()}
				</div>
				<Model />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		sidebar: state.sidebar,
		login: state.login
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ toggleSidebar, showModel, closeModel, logout }, dispatch)
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(Sidebar);