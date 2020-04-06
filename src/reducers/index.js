import { combineReducers } from 'redux'
import dataBaseReducer from './dataBaseReduсer';
import initialRegionReducer from './initialRegionReducer';
import currentMarkerReducer from './currentMarkerReducer';
import modalDetailsReducer from './modalDetailsReducer';
import crutchCurrentMarketReducer from './crutchCurrentMarketReducer';
import cityListReducer from './cityListReducer';
import initialCityReducer from './initialCityReducer';

export default combineReducers({
  dataBase: dataBaseReducer,
  initialRegion: initialRegionReducer,
  currentMarker: currentMarkerReducer,
  crutchCurrentMarker: crutchCurrentMarketReducer,
  modalDetails: modalDetailsReducer,
  cityList: cityListReducer,
  initialCity: initialCityReducer,
})
