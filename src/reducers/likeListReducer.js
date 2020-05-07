export default (state = [], action) => {
    if (action.type === "PULL") {
        if(state.find(item => item === action.payload)) {
            const index = state.findIndex((item) => item === action.payload);
            return [...state.slice(0, index), ...state.slice(index+1)]
        } else {
            return [...state, action.payload]
        }
    }
    return state;
}
