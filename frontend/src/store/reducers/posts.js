import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import {arrayToObject} from '../../utils/helper'

const initialState = {
    // posts: {},
}

const reducer = (state = initialState, action) => {
    const { post, posts,  postId, comments } = action

    switch (action.type) {
        case actionType.GET_POSTS: 
            return updateObject(state, arrayToObject(posts,"id"))
        case actionType.GET_POST: 
            return updateObject(state, {[post.id]: post} )
        case actionType.GET_COMMENTS:
            console.log('[POSTS reducer] comments',postId,comments)
            const commentsIds = comments.reduce((acc,cur) => { acc.push(cur.id); return acc },[])
            console.log('[POSTS REDUCER GET_COMMENTS] ' +commentsIds.length)
            console.log(commentsIds)
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    commentIds: [...commentsIds]
                }
            }
            /*return {
                ...state,
                [ post.id ]: post
            }*/
        default:
            return {
                ...state
            }
    }
}

export default reducer