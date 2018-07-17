import * as actionTypes from "./actionTypes";
import * as commentsAPI from '../../utils/commentsAPI'



export const getComments_action = (postId,comments) => {
    return {
        type: actionTypes.GET_COMMENTS,
        postId,
        comments
    }
}

export const getComments = (postId) => {
    return dispatch => {
        return commentsAPI.fetchCommentsForPost(postId)
            .then( response =>  {
                return dispatch(getComments_action(postId,response.data))
            })
    }
}





export const updateCommentVote_action = (commentId,comment) => {
    return {
        type: actionTypes.UPD_COMMENT_VOTE,
        voteScore: comment.voteScore,
        commentId,
    }
}

export const updateCommentVote = (commentId, option) => {
    return dispatch => {
        return commentsAPI.updateCommentVote(commentId,option)
            .then(response => {
                return dispatch(updateCommentVote_action(commentId,response.data))
            })
    }
}
