

export function login(info) {
	return {
		type: 'login',
		info
	}
}

export function logout() {
	return {
		type: 'logout'
	}
}