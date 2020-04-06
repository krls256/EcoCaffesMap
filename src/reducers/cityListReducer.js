export default (state = null, actions) => {
  if (actions.type === "SET_CITY") {
    return actions.payload;
  } else return state
}
