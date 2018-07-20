import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import { arrayToObject } from '../../utils/helper'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { post, posts, postId, comments, comment, commentId, voteScore } = action

    switch (action.type) {

        case actionType.GET_POSTS:
            // const posts_active = posts.filter(post => post.disable !== true)
            return updateObject(state, arrayToObject(posts, "id"))

        case actionType.GET_POST:
        case actionType.ADD_POST:
        case actionType.UPDATE_POST:
            return updateObject(state, { [post.id]: post })

        case actionType.DELETE_POST:
            const { [postId]: value, ...newState } = state
            return {
                ...newState,
            }

        case actionType.GET_COMMENTS:
            const commentIds = comments.reduce((acc, cur) => { acc.push(cur.id); return acc }, [])
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    commentIds: [...commentIds]
                }
            }

        case actionType.ADD_COMMENT:
            const newCommentIds = state[comment.parentId].commentIds.concat(comment.id)
            return {
                ...state,
                [comment.parentId]: {
                    ...state[comment.parentId],
                    commentIds: [...newCommentIds]
                }
            }

        case actionType.DELETE_COMMENT:
            const filteredCommentIds = state[postId].commentIds.filter(id => id !== commentId)
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    commentIds: [...filteredCommentIds]
                }
            }

        case actionType.UPDATE_POST_VOTE:
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