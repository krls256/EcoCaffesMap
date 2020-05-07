export default (state = false, action) => {
    if(action.type === 'TOGGLE') {
        return !state
    }
    return state;
}
