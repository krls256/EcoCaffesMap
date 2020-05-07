import { combineReducers } from 'redux'
import dataBaseReducer from './dataBaseReduсer';
import initialRegionReducer from './initialRegionReducer';
import currentMarkerReducer from './currentMarkerReducer';
import crutchCurrentMarketReducer from './crutchCurrentMarketReducer';
import cityListReducer from './cityListReducer';
import initialCityReducer from './initialCityReducer';
import settingsBarReducer from './settingsBarReducer';
import likeListReducer from './likeListReducer';
import likeListActiveReducer from './likeListActiveReducer';

export default combineReducers({
  dataBase: dataBaseReducer,
  initialRegion: initialRegionReducer,
  currentMarker: currentMarkerReducer,
  crutchCurrentMarker: crutchCurrentMarketReducer,
  cityList: cityListReducer,
  initialCity: initialCityReducer,
  settingsBar: settingsBarReducer,
  likeList: likeListReducer,
  likeListActive: likeListActiveReducer,
})
