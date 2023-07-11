const SERVER_URL = "https://shopping.josdem.io/login"

const fetchData = async () => {
  return await fetch(SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "josdem",
      password: "12345678",
    }),
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data.token
    })
    .catch((error) => {
      console.log(error)
    })
}

exports.fetchData = fetchData
