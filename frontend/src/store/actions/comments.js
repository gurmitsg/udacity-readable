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
        type: actionTypes.UPDATE_COMMENT_VOTE,
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


export const addComment_action = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        comment,
    }
}


export const addComment = (comment) => {
    return dispatch => {
        return commentsAPI.addComment(comment)
            .then(response => {
                return dispatch(addComment_action(response.data))
            })
    }
}

export const updateComment_action = (commentId,comment) => {
    return {
        type: actionTypes.UPDATE_COMMENT,
        commentId,
        comment,
    }
}


export const updateComment = (commentId,comment) => {
    return dispatch => {
        return commentsAPI.updateComment(commentId,comment)
            .then(response => {
                return dispatch(updateComment_action(commentId,response.data))
            })
    }
}


export const deleteComment_action = (commentId,postId) => {
    return {
        type: actionTypes.DELETE_COMMENT,
        commentId,
        postId,
    }
}


export const deleteComment = (commentId,postId) => {
    return dispatch => {
        return commentsAPI.deleteComment(commentId)
            .then(response => {
                return dispatch(deleteComment_action(commentId,postId))
            })
    }
}

