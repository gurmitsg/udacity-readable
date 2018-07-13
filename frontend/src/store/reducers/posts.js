import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'

const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    const { posts } = action

    console.log(action)

    switch (action.type) {
        case actionType.GET_POSTS:
            return updateObject(state, { posts: posts })
        default:
            return {
                ...state
            }
    }
}

export default reducer