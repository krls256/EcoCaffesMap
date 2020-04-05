import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from '../map';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import getDataFromDB from '../../services/getDataFromDB';
import getGeolocation from '../../services/getGeolocation';
import ModalDetails from '../modal-details/modal-details';
import MapView from "react-native-maps";
import InfoBox from '../info-box';


const App = ({dataBase,update, set_region}) => {
  useEffect(() => {
    getDataFromDB(update);
    getGeolocation(set_region);
  }, []);

  if(!dataBase) {
    return <Text style={style.text}>Wait</Text>
  }
  return (
    <View style={{flex: 1}}>
      <Map/>
      <InfoBox/>
    </View>
    )
};

const mapStateToProps = ({dataBase}) => {
  return {
    dataBase,
  }
};

export default connect(mapStateToProps, actions)(App);

const style = StyleSheet.create({
  text: {
    textAlign: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35
  }
});


