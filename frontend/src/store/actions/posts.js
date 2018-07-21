import * as actionTypes from "./actionTypes";
import * as postsAPI from '../../utils/postsAPI'

/* Actions related to posts */


// non Axios
export const getPosts0 = function () {
    return function (dispatch) {
        return postsAPI.fetchPosts()
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
        return postsAPI.fetchPosts()
            .then(response => {
                return dispatch(getPosts_action(response.data))
            })
    }
}

export const getPostsByCat = (category) => {
    return dispatch => {
        return postsAPI.fetchPostsByCat(category)
            .then(response => {
                return dispatch(getPosts_action(response.data))
            })
    }
}



export const getPost_error = (postId) => {
    return {
        type: actionTypes.GET_POST_ERROR,
        postId,
    }
}


export const getPost_action = (post) => {
    return {
        type: actionTypes.GET_POST,
        post
    }
}

export const getPost = (id) => {
    return dispatch => {
        return postsAPI.fetchPost(id)
            .then(response => {
                return dispatch(getPost_action(response.data))
            })
            .catch(() => {
                return dispatch(getPost_error(id))
            })
    }
}


export const updatePostVote_action = (postId, post) => {
    return {
        type: actionTypes.UPDATE_POST_VOTE,
        voteScore: post.voteScore,
        postId,
    }
}


export const updatePostVote = (postId, option) => {
    return dispatch => {
        return postsAPI.updatePostVote(postId, option)
            .then(response => {
                return dispatch(updatePostVote_action(postId, response.data))
            })
    }
}


export const addPost_action = (post) => {
    return {
        type: actionTypes.ADD_POST,
        post
    }
}


export const addPost = (post) => {
    return dispatch => {
        return postsAPI.addPost(post)
            .then(response => {
                return dispatch(addPost_action(response.data))
            })
    }
}


export const updatePost_action = (postId, post) => {
    return {
        type: actionTypes.UPDATE_POST,
        postId,
        post,
    }
}


export const updatePost = (postId, post) => {
    return dispatch => {
        return postsAPI.updatePost(postId, post)
            .then(response => {
                return dispatch(updatePost_action(postId, response.data))
            })
    }
}


export const deletePost_action = (postId) => {
    return {
        type: actionTypes.DELETE_POST,
        postId,
    }
}


export const deletePost = (postId) => {
    return dispatch => {
        return postsAPI.deletePost(postId)
            .then(response => {
                return dispatch(deletePost_action(postId))
            })
    }
}







