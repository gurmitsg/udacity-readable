import * as actionTypes from "./actionTypes";
import * as commentsAPIUtil from '../../utils/commentsAPIUtil'



export const getComments_action = (postId,comments) => {
    return {
        type: actionTypes.GET_COMMENTS,
        postId,
        comments
    }
}

export const getComments = (postId) => {
    return dispatch => {
        return commentsAPIUtil.fetchCommentsForPost(postId)
            .then( response =>  {
                return dispatch(getComments_action(postId,response.data))
            })
    }
}

