import axios from 'axios';

const getCSRF = () => {
  axios.get('/api/session/csrf/')
}

export { getCSRF }
