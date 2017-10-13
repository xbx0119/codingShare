import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Model from './model';

import iconfont from '../../css/iconfont.scss';
import style from '../../css/sidebar.scss';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			login: false,
			model: false,
			kind: ''
		}

		var self = this;
		window.addEventListener('click', function(e) {
			var elem = ReactDOM.findDOMNode(self);
			if(self.state.show) {
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
		const sidebar = this.refs.sidebar;
		this.state.show ? this.hide(sidebar) : this.show(sidebar);
		this.setState({
			show: !this.state.show
		})
	}

	checkLogin2getNavUl() {
		if(!this.state.login) {
			return(
				<ul>
					<li><Link to='/'>Index</Link></li>
					<li onClick={this.showModel.bind(this, 'login')}>Login</li>
					<li onClick={this.showModel.bind(this, 'register')}>Register</li>
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
		this.setState({
			login: false
		})
	}

	show(elem) {
		elem.style.transform = "translate(300px, 0px)";
	}
	hide(elem) {
		elem.style.transform = "translate(0px, 0px)";
	}


	showModel(kind) {
		this.setState({
			model: true,
			kind: kind
		})
	}
	closeModel() {
		this.setState({
			model: false,
			kind: ''
		})
	}


	render() {
		return(
			<div>
				<i className="navbutton iconfont icon-menu" onClick={this.toggleMenu.bind(this)}></i>
				<div className="sidebar" ref="sidebar">
					<h2 className="menu" onClick={this.toggleMenu.bind(this)}><i className="iconfont icon-menu"></i>CodingShare</h2>
					{this.checkLogin2getNavUl()}
				</div>
				<Model show={this.state.model} kind={this.state.kind} socket={this.props.socket}
				       cb={this.closeModel.bind(this)} login={() => this.setState({login: true})} />
			</div>
		)
	}
}

export default Sidebar;