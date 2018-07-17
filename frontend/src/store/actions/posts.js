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
    }
}


export const updatePostVote_action = (postId,post) => {
    return {
        type: actionTypes.UPD_POST_VOTE,
        voteScore: post.voteScore,
        postId,
    }
}

export const updatePostVote = (postId, option) => {
    return dispatch => {
        return postsAPI.updatePostVote(postId,option)
            .then(response => {
                return dispatch(updatePostVote_action(postId,response.data))
            })
    }
}


