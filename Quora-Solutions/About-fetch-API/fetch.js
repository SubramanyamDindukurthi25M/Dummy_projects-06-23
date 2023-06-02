const baseUrl = 'https://www.course-api.com/react-tours-project'

fetch(baseUrl)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))