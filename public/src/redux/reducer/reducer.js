import { combineReducers } from 'redux'

const initialState = {
	login: {state: false, user: '', passwd: ''},
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


function loginReducer(state = {state: false, user: '', passwd: ''}, action) {
	switch(action.type) {
		case 'login':
			return {
				state: true, 
				user: action.info.user, 
				passwd: action.info.passwd
			};
			break;
		case 'logout':
			return {
				state: false, 
				user: '', 
				passwd: ''
			};
			break;
		default:
      		return state;
	}
}


function sidebarReducer(state = false, action) {
	switch(action.type) {
		case 'toggle':
			console.log("toggle")
			return !state;
			break;
		default:
      		return state;
	}
}

function modelReducer(state = {show: false, kind: ''}, action) {
	switch(action.type) {
		case 'show':
			console.log("reduce: " + action.kind)
			console.log(state)
			return {
				show: true,
				kind: action.kind
			};
			break;
		case 'close':
			return {show: false, kind: ''};
			break;
		default:
      		return state;
	}
}

function roomReducer(state = {id: '', creator: ''}, action) {
	switch(action.type) {
		case 'enter':
			return {
				id: action.id,
				creator: action.creator
			}
			break;
		default:
			return state;
	}
}


const reducer = combineReducers({
	login: loginReducer,
	socket: socketReducer,
	sidebar: sidebarReducer,
	model: modelReducer,
	room: roomReducer
})


export default reducer;