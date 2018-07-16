import * as actionTypes from "./actionTypes";
import * as postsAPIUtil from '../../utils/postsAPIUtil'

/* Actions related to posts */


// non Axios
export const getPosts0 = function () {
    return function (dispatch) {
        return postsAPIUtil.fetchPosts()
            .then((res) => { return (res.json()) })
            .then(function (posts) {
                return dispatch(getPosts_action(posts))
            })
    }
}


// Axios

export const getPosts_action = (posts) => {
    return {
        type: actionTypes.GET_POSTS,
        posts
    }
}

export const getPosts = () => {
    return dispatch => {
        return postsAPIUtil.fetchPosts()
            .then( response =>  {
                return dispatch(getPosts_action(response.data))
            })
    }
}

export const getPost_action = (post) => {
    console.log('getPost_action',post)
    return {
        type: actionTypes.GET_POST,
        post
    }
}

export const getPost = (id) => {
    return dispatch => {
        return postsAPIUtil.fetchPost(id)
            .then( response =>  {
                return dispatch(getPost_action(response.data))
            })
    }
}
