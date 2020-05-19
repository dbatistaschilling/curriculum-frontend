const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance;