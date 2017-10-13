import React from 'react';

import style from '../../css/model.scss';

import Login from './login';
import Register from './register';

class Model extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: this.props.show
		}
		
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
		this.setState({
			show: !this.state.show
		});
		this.props.cb();
	}

	render() {
		return (
			<div className={this.state.show ? "model" : "model hide"}>
				<div className="model-content">
					<i className="close iconfont icon-close2" onClick={this.close.bind(this)}></i>
					<h2 className="title">codingShare</h2>
					{this.renderContentByKind()}
				</div>
			</div>
		)
	}	
}

export default Model;