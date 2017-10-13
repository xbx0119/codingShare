function ajax(method, url, json, cb) {
	method = method.toUpperCase();

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			cb(xhr.responseText);
    	}
	}
	xhr.open(method, url);

	if(method == 'GET') {
		xhr.send();
	}

	if(method == 'POST') {
		var data = [];
		for(let key in json) {
			data.push(key + "=" + json[key]);
		}
		data = data.join("&");
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}
}

export default ajax;