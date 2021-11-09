

let API_URL = 'https://guarded-wildwood-57519.herokuapp.com';
// if (process.allowedNodeEnvironmentFlags.env === 'production') {
// 	API_URL = 'https://guarded-wildwood-57519.herokuapp.com/';
// }


export async function httpGetAllTeachers() {
	try {
		const response = await fetch(`${API_URL}/teacher`, {
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await response.json();
		console.log(data);
		return data;
		
	} catch (error) {
		console.log(error);
		return []
	}
}

export async function httpCreateTeachers(data) {
	try {
		const response = await fetch(`${API_URL}/teacher`, {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});
		const res = await response.json();
		console.log(res);
		return res;
		
	} catch (error) {
		console.log(error);
		return []
	}
}


