import React from 'react';


class RoomList extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<li>
				<h2>1001 this room name</h2>
				<p>intro</p>
				<i>lock</i>
			</li>
		)
	}
}


class Control extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	addRoom() {

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
					
				</div>
			</div>
		)
	}
}

export default Control;