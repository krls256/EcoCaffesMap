import React from 'react';
import {FlatList, Text, StyleSheet, SafeAreaView, Modal} from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import getGeolocation from '../../services/getGeolocation';
import { storeData } from '../../services/asyncStorage';

const CityList = ({cityList, set_initial_city, set_region}) => {
  return (
    <Modal animationType="slide"
           transparent
    >
      <SafeAreaView style={style.wrapper}>
        <Text style={style.header}>Оберіть стартове Місто</Text>
        <FlatList
          data={cityList}
          keyExtractor={(city) => city.name}
          renderItem={({item}) => (
            <Text style={style.text}
                  onPress={() => {
                    const coords = {
                      latitude: Number(item.coords.latitude),
                      longitude: Number(item.coords.longitude),
                    };
                    set_initial_city(item);
                    storeData('city', JSON.stringify(coords));
                    set_region(coords);
                    getGeolocation(set_region);
                  }}>{item.name}</Text>
          )}/>
      </SafeAreaView>
    </Modal>

  )
};

const mapStateToProps = ({cityList}) => ({cityList});

export default connect(mapStateToProps, actions)(CityList);

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: '59%',
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 14,
    color: '#35383B',
    opacity: 0.7,
    fontFamily: 'PTSerif-Bold',
    height: 30,
    lineHeight: 22,
    borderBottomWidth: 1,
    borderColor: "#8EBF45"
  },
  text: {
    textAlign: 'center',
    color: '#35383B',
    opacity: 0.7,
    fontFamily: 'PTSerif-Bold',
    paddingVertical: 5,
    fontSize: 18,
    lineHeight: 18,
    marginHorizontal: 10,
    marginVertical: 7,
    borderBottomWidth: 0.5,
    borderColor: '#8EBF45'

  },
});
