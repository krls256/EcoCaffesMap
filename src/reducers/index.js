import { combineReducers } from 'redux'
import dataBaseReducer from './dataBaseReduсer';
import initialRegionReducer from './initialRegionReducer';
import currentMarkerReducer from './currentMarkerReducer';
import modalDetailsReducer from './modalDetailsReducer';
import crutchCurrentMarketReducer from './crutchCurrentMarketReducer';

export default combineReducers({
  dataBase: dataBaseReducer,
  initialRegion: initialRegionReducer,
  currentMarker: currentMarkerReducer,
  crutchCurrentMarker: crutchCurrentMarketReducer,
  modalDetails: modalDetailsReducer,
})
