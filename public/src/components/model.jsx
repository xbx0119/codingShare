import React, { PropTypes } from 'react';

import style from '../../css/model.scss';

import Login from './login';
import Register from './register';
import Addroom from './addroom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { showModel, closeModel } from '../redux/action/modelAction';

class Model extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {

	}

	renderContentByKind() {
		switch(this.props.model.kind) {
			case 'login':
				return <Login />;
				break;
			case 'register':
				return <Register />;
				break;
			case 'addroom': 
				return <Addroom />;
				break;
		}
	}

	close() {
		this.props.actions.closeModel();
	}

	render() {
		return (
			<div className={this.props.model.show ? "model" : "model hide"}>
				<div className="model-content">
					<i className="close iconfont icon-close2" onClick={this.close.bind(this)}></i>
					<h2 className="title">codingShare</h2>
					{this.renderContentByKind()}
				</div>
			</div>
		)
	}	
}

function mapStateToProps(state) {
	return {
		model: state.model
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
)(Model);
