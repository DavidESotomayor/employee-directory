import axios from 'axios'

function fetchAxios (options) {
    return axios(options).then(response => {
        return response.data
    })
}

export default fetchAxios