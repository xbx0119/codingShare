import React from 'react';

import style from '../../css/search.scss';

class Search extends React.Component {
	constructor(props) {
		super(props);
		
	}

	handleChange(e) {
		var value = e.target.value;
	}

	render() {
		return (
			<div className="search_bar">
				<i className="iconfont icon-search"></i>
				<input className="search_input" placeholder="搜索" onChange={this.handleChange.bind(this)} />
				<div className="search_result">

				</div>
			</div>
		)
	}
}

export default Search;