const SERVER_URL = 'https://shopping.josdem.io/login'

const fetchData = async () => {
    return await fetch(SERVER_URL, {
        method: 'GET',
        mode: 'no-cors',
        headers: {'Authorization': 'Basic am9zZGVtOjEyMzQ1Njc4'}
    })
    .then(response => {
        return response.json()
    })
}

exports.fetchData = fetchData