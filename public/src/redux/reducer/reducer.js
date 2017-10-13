import { combineReducers } from 'redux'

const initialState = {
	login: false,
	socket: null,
	showSidebar: false,
	model: {show: false, kind: ''},
	user: '',
	passwd: ''
};


function socketReducer(state = null, action) {
	switch(action.type) {
		case 'connection':
			return action.text
			break;
		default:
      		return state
	}
}


function loginReducer(state = false, action) {
	switch(action.type) {
		case 'login':
			return true;
			break;
		case 'logout':
			return false;
			break;
		default:
      		return state;
	}
}


function sidebarReducer(state = false, action) {
	switch(action.type) {
		case 'toggle':
			return !state;
			break;
		default:
      		return state;
	}
}

function modelReducer(state = {show: false, kind: ''}, action) {
	switch(action.type) {
		default:
      		return state;
	}
}


const reducer = combineReducers({
	login: loginReducer,
	socket: socketReducer,
	sidebar: sidebarReducer,
	model: modelReducer
})


export default reducer;