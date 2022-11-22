
export const call = async (method, endpoint, body, token) => {
    return await fetch(`${env.BACKEND_URL}/${endpoint}`, {
        method: `${method}`,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body) 
    }).then(response => response.json())
    .catch((error) => console.error('Error:', error));
};