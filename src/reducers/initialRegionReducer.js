const InitialRegion = {
  latitude: 49.839494,
  longitude: 25.031848,
  latitudeDelta: 0.09,
  longitudeDelta: 0.035
};

export default (state = InitialRegion, actions) => {
  if(actions.type === "SET_REGION") {
    return ({...state, ...actions.payload})
  } else {
    return state
  }
}
