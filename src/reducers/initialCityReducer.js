export default (state = null, actions) => {
  switch (actions.type) {
    case 'SET_INITIAL_CITY': return actions.payload;
    case 'RESET_INITIAL_CITY': return null;
    default: return state
  }
}
