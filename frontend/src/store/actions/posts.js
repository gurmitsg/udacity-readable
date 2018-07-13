import * as actionType from "./actionTypes";
import * as postsAPIUtil from '../../utils/postsAPIUtil'


/* Actions related to posts */
export const getPosts = posts => {
    console.log('[getPosts] ' + posts)
    return {
        type: actionType.GET_POSTS,
        posts
    }
}

export const dispatchPosts = function () {
    return function (dispatch) {
        return postsAPIUtil.fetchPosts()
            .then((res) => { return (res.json()) })
            .then(function (posts) {
                return dispatch(getPosts(posts))
            })
    }
}





export const getPost = (id) => {
    console.log('[getPost] ' + id)
    return {
        type: actionType.GET_POST,
        id: id
    }
}
