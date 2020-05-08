import { combineReducers } from 'redux'
import dataBaseReducer from './dataBaseReduсer';
import initialRegionReducer from './initialRegionReducer';
import currentMarkerReducer from './currentMarkerReducer';
import cityListReducer from './cityListReducer';
import initialCityReducer from './initialCityReducer';
import settingsBarReducer from './settingsBarReducer';
import likeListReducer from './likeListReducer';
import likeListActiveReducer from './likeListActiveReducer';
import allMarkersRefReducer from './allMarkersRefReducer';

export default combineReducers({
  dataBase: dataBaseReducer,
  initialRegion: initialRegionReducer,
  currentMarker: currentMarkerReducer,
  cityList: cityListReducer,
  initialCity: initialCityReducer,
  settingsBar: settingsBarReducer,
  likeList: likeListReducer,
  likeListActive: likeListActiveReducer,
  allMarkersRef: allMarkersRefReducer,
})
