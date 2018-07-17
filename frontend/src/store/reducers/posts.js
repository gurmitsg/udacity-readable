import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import {arrayToObject} from '../../utils/helper'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { post, posts,  postId, comments, voteScore } = action

    switch (action.type) {
        case actionType.GET_POSTS: 
            return updateObject(state, arrayToObject(posts,"id"))
        case actionType.GET_POST: 
            return updateObject(state, {[post.id]: post} )
        case actionType.GET_COMMENTS:
            const commentIds = comments.reduce((acc,cur) => { acc.push(cur.id); return acc },[])
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    commentIds: [...commentIds]
                }
            }
        case actionType.UPD_POST_VOTE:
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    voteScore: voteScore
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer