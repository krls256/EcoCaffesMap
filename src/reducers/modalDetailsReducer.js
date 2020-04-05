export default (state = false, actions) => {
  switch (actions.type) {
    case 'TRUE': return true;
    case 'FALSE': return false;
    default: return state;
  }
}
