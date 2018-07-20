import axios from 'axios';
const ROOT_URL = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'authorized'
}


// non Axios
export const fetchPosts0 = () => fetch(
    `${ROOT_URL}/posts`,
    { headers }
)


// Axios

export const fetchPosts = () => {
    return axios.get(`${ROOT_URL}/posts`, { headers })
}


export const fetchPost = (id) => {
    return axios.get(`${ROOT_URL}/posts/${id}`, { headers });
}


export const fetchPostsByCat = (category) => {
    return axios.get(`${ROOT_URL}/${category}/posts`, { headers })
}



export const updatePostVote = (id, option) => {
    const request = axios
        .post(`${ROOT_URL}/posts/${id}`,
            { option },
            { headers });

    return request;
}


export const addPost = (data) => {
    const request = axios
        .post(`${ROOT_URL}/posts`, data, { headers })

    return request;
}


export const updatePost = (id,data) => {
    const request = axios
        .put(`${ROOT_URL}/posts/${id}`, data, { headers })

    return request;
}

export const deletePost = (id) => {
    const request = axios
        .delete(`${ROOT_URL}/posts/${id}`, { headers })

    return request;
}



