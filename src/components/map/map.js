import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { connect } from 'react-redux'
import Markers from '../markers'
import * as actions from '../../actions'
import CityList from '../city-list';
import Settings from '../settings';
import LikeList from '../like-list';

const Map = ({initialRegion, discard, cityList, initialCity, likeListActive}) => {
  const cityChooser = cityList && !initialCity ? <CityList/> : null;
  const likeList = likeListActive ? <LikeList /> : null;
  return (
    <View style={style.container}>
      <MapView style={style.map}
               showsUserLocation
               provider={PROVIDER_GOOGLE}
               onPress={discard}
               region={initialRegion}
        >
        <Markers/>
      </MapView>
      <Settings/>
      {cityChooser}
      {likeList}
    </View>
  )
};

const mapStateToProps = ({dataBase, initialRegion, likeListActive, cityList, initialCity}) => {
  return {
    dataBase,
    initialRegion,
    likeListActive,
    cityList,
    initialCity
  }
};
export default connect(mapStateToProps, actions)(Map)

const style = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  container: {
    ...StyleSheet.absoluteFillObject
  },
});
