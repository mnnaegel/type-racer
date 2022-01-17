const axios = require('axios');

const uri = "http://api.quotable.io/random"

module.exports = getData = () => {
    return axios.get(uri).then(response=> response.data.content.split(" "))
}