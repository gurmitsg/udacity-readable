import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../utils/storeUtil'
import { arrayToObject } from '../../utils/helper'

const initialState = {}

const reducer = (state = initialState, action) => {
    const { categories } = action

    switch (action.type) {
        case actionType.GET_CATEGORIES:
            return updateObject(state, arrayToObject(categories, "name"))
        default:
            return {
                ...state
            }
    }
}

export default reducer