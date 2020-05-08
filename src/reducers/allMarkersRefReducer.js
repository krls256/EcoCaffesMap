export default (state = {}, action) => {
    if (action.type === "ADD_MARKER") {
        const newObj = state;
        newObj[action.index] = action.payload;
        return newObj
    }
    return state;
}
