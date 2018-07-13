import * as actionType from "./actionTypes";

export const getComments = () => {
    console.log('[getComments] ')
    return {
        type: actionType.GET_COMMENTS,
    }
}

export const getComment = (id) => {
    console.log('[getComment] ' + id)
    return {
        type: actionType.GET_COMMENT,
        id: id
    }
}


