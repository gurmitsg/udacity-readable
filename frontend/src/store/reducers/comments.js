import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import { arrayToObject } from '../../utils/helper'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { comment, comments, commentId, voteScore } = action

    switch (action.type) {
        case actionType.GET_COMMENTS:
            return updateObject(state, arrayToObject(comments, "id"))
        case actionType.UPDATE_COMMENT_VOTE:
            return {
                ...state,
                [commentId]: {
                    ...state[commentId],
                    voteScore: voteScore
                }
            }
        case actionType.ADD_COMMENT:
            return updateObject(state, { [comment.id]: comment })

        case actionType.UPDATE_COMMENT:
            return updateObject(state, { [comment.id]: comment })

        case actionType.DELETE_COMMENT:
            const { [commentId]: value, ...newState } = state
            return {
                ...newState,
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer