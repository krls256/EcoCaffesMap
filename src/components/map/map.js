import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import InfoBox from '../info-box';
import { connect } from 'react-redux'
import Markers from './markers'
import * as actions from '../../actions'
import ModalDetails from '../modal-details/modal-details';

const Map = ({initialRegion, discard, modalDetails, currentMarker}) => {
  const modal = modalDetails ? <ModalDetails/> : null;
  return (
    <View style={style.container}>
      <MapView style={style.map}
               showsUserLocation={true}
               provider={PROVIDER_GOOGLE}
               initialRegion={initialRegion}
               onPress={discard}
        >
        <Markers/>
      </MapView>
      {modal}
    </View>
  )
};

const mapStateToProps = ({dataBase, initialRegion, modalDetails, currentMarker}) => {
  return {
    dataBase,
    initialRegion,
    modalDetails,
    currentMarker
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
