import * as actionTypes from "./actionTypes";
import * as categoriesAPI from '../../utils/categoriesAPI'



export const getCategories_action = (categories) => {
    return {
        type: actionTypes.GET_CATEGORIES,
        categories
    }
}


export const getCategories = (postId) => {
    return dispatch => {
        return categoriesAPI.getCategories()
            .then( response =>  {
                return dispatch(getCategories_action(response.data.categories))
            })
    }
}
