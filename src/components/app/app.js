import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Map from '../map';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import getDataFromDB from '../../services/getDataFromDB';
import getGeolocation from '../../services/getGeolocation';
import getCities from '../../services/getCities';
import InfoBox from '../info-box';
import { getData } from '../../services/asyncStorage'

const App = ({dataBase, update, set_region, set_city, set_initial_city}) => {

  useEffect(() => {
    getData('city')
      .then(city => {
        set_initial_city(JSON.parse(city));
        set_region(JSON.parse(city))
      });
    getData('base')
      .then(base => {
        update(JSON.parse(base))
      });
    getCities(set_city);
    getGeolocation(set_region);
    getDataFromDB(update);
  }, []);

  if(!dataBase) {
    return <ActivityIndicator size={100} color="#0000ff" style={style.spinner}/>
  }
  return (
    <View style={{flex: 1}}>
      <Map/>
      <InfoBox/>
    </View>
    )
};

const mapStateToProps = ({dataBase, initialCity}) => {
  return {
    dataBase,
  }
};

export default connect(mapStateToProps, actions)(App);

const style = StyleSheet.create({
  spinner: {
    width: '100%',
    height: '100%'
  }
});


