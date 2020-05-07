export default (state = false, action) => {
    switch (action.type) {
        case "LIKE_TRUE": return true;
        case "LIKE_FALSE": return false;
        default: return state;
    }
}
