import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import { arrayToObject } from '../../utils/helper'

const initialState = {
    // comments: {},
}

const reducer = (state = initialState, action) => {
    const { comment, comments } = action

    switch (action.type) {
        case actionType.GET_COMMENTS:
            return updateObject(state, arrayToObject(comments, "id"))

        /*            case actionType.GET_COMMENT: 
                return updateObject(state, {[comment.id]: comment} )
                return {
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