const API_BASE = 'http://localhost:5000/';


export const singIn = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
   return await fetch(`${API_BASE}/user`, options);
}


export const singUp = (data) => {
    
}