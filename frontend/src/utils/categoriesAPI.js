import axios from 'axios';
const ROOT_URL = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'authorized'
}


export const getCategories = () => {
    return axios.get(`${ROOT_URL}/categories`, { headers });
}

