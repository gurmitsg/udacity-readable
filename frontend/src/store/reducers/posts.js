import * as actionType from '../actions/actionTypes'
import { arrayToObject } from '../../utils/helper'
// import { updateObject } from '../../utils/storeUtil'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { post, posts, postId, comments, comment, commentId, voteScore } = action

    switch (action.type) {

        case actionType.GET_POSTS:
            //return updateObject(state, arrayToObject(posts, "id"))
            const postsById = arrayToObject(posts, "id")
            return {
                ...postsById
            }

        case actionType.GET_POST_ERROR:
            return {
                ...state,
                [postId]: {
                    status: 'error'
                }
            }

        case actionType.GET_POST:
        case actionType.ADD_POST:
        case actionType.UPDATE_POST:
            let oldCommentIds = []
            if (state[post.id]) {
                oldCommentIds = state[post.id].commentIds
            }
            return {
                ...state,
                [post.id]: {
                    ...post,
                    commentIds: oldCommentIds,
                }
            }

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
                    commentCount: state[comment.parentId].commentCount + 1,
                    commentIds: [...newCommentIds],
                }
            }

        case actionType.DELETE_COMMENT:
            const filteredCommentIds = state[postId].commentIds.filter(id => id !== commentId)
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    commentCount: state[postId].commentCount - 1,
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