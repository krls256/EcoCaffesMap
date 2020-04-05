export default (state = null, action) => {
  switch (action.type) {
    case 'CHOOSE': return action.payload;
    case 'DISCARD': return null;
    default: return state
  }
}
