const axios = require('axios').default;

// axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';`

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default instance;