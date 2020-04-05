export default (state = {}, actions) => {
  if (actions.type === 'CRUTCH') {
    return actions.payload
  }
  return state
}
