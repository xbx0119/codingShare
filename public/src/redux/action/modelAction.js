export function showModel(kind) {
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
