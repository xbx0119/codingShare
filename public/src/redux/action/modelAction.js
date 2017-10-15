export function showModel(kind) {
	console.log("action:" + kind)
	return {
		type: 'show',
		kind
	}
}

export function closeModel() {
	return {
		type: 'close'
	}
}
