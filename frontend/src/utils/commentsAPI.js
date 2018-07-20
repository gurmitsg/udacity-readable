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


export const updateCommentVote = (id, option) => {
    const request = axios
        .post(`${ROOT_URL}/comments/${id}`,
            { option },
            { headers });

    return request;
}


export const addComment = (data) => {
    const request = axios
        .post(`${ROOT_URL}/comments`, data, { headers })

    return request;
}


export const updateComment = (id,data) => {
    const request = axios
        .put(`${ROOT_URL}/comments/${id}`, data, { headers })

    return request;
}

export const deleteComment = (id) => {
    const request = axios
        .delete(`${ROOT_URL}/comments/${id}`, { headers })

    return request;
}