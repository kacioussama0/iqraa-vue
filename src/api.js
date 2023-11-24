const API_URL = 'http://127.0.0.1:8000/api';
async function getData(url) {
    let response = await fetch(`${API_URL}/${url}`)
    return await response.json();
}

async function postData(url,data) {
    let response = await fetch(`${API_URL}/${url}`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export {getData,postData}