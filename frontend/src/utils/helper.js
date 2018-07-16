
export const arrayToObject = (array, keyField) =>
    array.reduce((obj, item) => {
        obj[item[keyField]] = item
        return obj
    }, {})

export const arrayToObject_byId = (array) =>
    array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})

