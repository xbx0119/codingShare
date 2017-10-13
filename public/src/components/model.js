import React from 'react';

import style from '../../css/model.scss';

import Login from './login';
import Register from './register';

import { connect } from 'react-redux'

import { showModel, closeModel } from '../redux/action/modelAction';

class Model extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	show: this.props.show
		// }
		
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			show: nextProps.show
		})
	}

	renderContentByKind() {
		switch(this.props.kind) {
			case 'login':
				return <Login login={this.props.login} close={this.close.bind(this)} socket={this.props.socket} />;
				break;
			case 'register':
				return <Register />;
				break;
		}
	}

	close() {
		// this.setState({
		// 	show: !this.state.show
		// });

		dispatch(closeModel())
		// this.props.cb();
	}

	render() {
		return (
			<div className={store.getState().show ? "model" : "model hide"}>
				<div className="model-content">
					<i className="close iconfont icon-close2" onClick={this.close.bind(this)}></i>
					<h2 className="title">codingShare</h2>
					{this.renderContentByKind()}
				</div>
			</div>
		)
	}	
}

function select(state) {
	return {
		showModel: state.showModel

	}
}

export default connect(select)(Model);