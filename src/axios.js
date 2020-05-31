const axios = require('axios').default;

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    // headers: {'X-Custom-Header': 'foobar'}
  }); 

export default instance;