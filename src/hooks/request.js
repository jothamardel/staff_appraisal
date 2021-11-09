

const API_URL = 'http://localhost:8000';


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


