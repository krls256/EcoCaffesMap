export default (state = null, actions) => {
  if (actions.type === 'SET_INITIAL_CITY') {
    return actions.payload;
  } else  return state;
}
