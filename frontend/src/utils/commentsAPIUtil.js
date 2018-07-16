import axios from 'axios';
const ROOT_URL = 'http://localhost:3001';

const headers = {
    'Accept': 'application/json',
    'Authorization': 'authorized'
}


// Axios

export const fetchCommentsForPost = (postId) => {
    return axios.get(`${ROOT_URL}/posts/${postId}/comments`, { headers });
}

export const fetchComment = (id) => {
    return axios.get(`${ROOT_URL}/comments/${id}`, { headers });
}

export const postComment = (comment) => {
    const request = axios.post(`${ROOT_URL}/comments`, comment, { headers });
    return request;
}

export const voteOnComment = (id, option) => {
    const request = axios
        .post(`${ROOT_URL}/comments/${id}`, { option }, { headers });

    return request;
}

export const updateComment = (comment) => {
    const request = axios
        .put(`${ROOT_URL}/comments/${comment.id}`, comment, { headers });

    return request;
}

export const deleteComment = (id) => {
    const request = axios
        .delete(`${ROOT_URL}/comments/${id}`, { headers });

    return request;
}