import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { connect } from 'react-redux'
import Markers from './markers'
import * as actions from '../../actions'
import ModalDetails from '../modal-details';
import CityList from '../city-list';

const Map = ({initialRegion, discard, modalDetails, cityList, initialCity}) => {
  const modal = modalDetails ? <ModalDetails/> : null;
  const cityChooser = cityList && !initialCity ? <CityList/> : null;
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
      {modal}
      {cityChooser}
    </View>
  )
};

const mapStateToProps = ({dataBase, initialRegion, modalDetails, cityList, initialCity}) => {
  return {
    dataBase,
    initialRegion,
    modalDetails,
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
  }
});
