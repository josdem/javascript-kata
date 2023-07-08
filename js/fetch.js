const SERVER_URL = 'https://shopping.josdem.io/login'

const fetchData = async () => {
    return await fetch(SERVER_URL, {
        method: 'GET',
        mode: 'no-cors',
        headers: {'Authorization': 'Basic ' + btoa("josdem:12345678")}
    })
    .then(response => {
        return response.json()
    })
}

exports.fetchData = fetchData