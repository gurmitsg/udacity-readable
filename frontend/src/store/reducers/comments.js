import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import { arrayToObject } from '../../utils/helper'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { comments, commentId, voteScore } = action

    switch (action.type) {
        case actionType.GET_COMMENTS:
            return updateObject(state, arrayToObject(comments, "id"))
        case actionType.UPD_COMMENT_VOTE:
            return {
                ...state,
                [commentId]: {
                    ...state[commentId],
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