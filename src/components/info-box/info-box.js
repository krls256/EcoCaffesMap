import React from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const InfoBox = ({currentMarker, set_true, set_region}) => {
  if (!currentMarker) {
    currentMarker = {}
  }
  const { name, address, schedule, lat, lng} = currentMarker;
  const region = {
    latitude: Number(lat),
    longitude: Number(lng),
  };
    if (name && address && schedule) {
      return (
        <TouchableOpacity style={style.window}
              onPress={() => {
                set_true();
                console.log(region)
                set_region(region)
              }}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.description}>{address}</Text>
          <Text style={style.description}>{schedule}</Text>
          <Text style={style.link}>
            Детальніше...
          </Text>
        </TouchableOpacity>
      )
    }
  return <View/>
};
const mapStateToProps = ({currentMarker}) => ({currentMarker})
;
export default connect(mapStateToProps, actions)(InfoBox);



const BoxWidth = 300;
const style = StyleSheet.create({
  window: {
    width: BoxWidth,
    height: 150,
    position: 'absolute',
    bottom: 50,
    left: (Dimensions.get('window').width -  BoxWidth)/2,
    borderRadius: 30,
  },
  name: {
    width: '100%',
    backgroundColor: 'rgba(240, 240, 240, .8)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '400',
    color: '#4285f4',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    alignItems: 'center',
    fontSize: 14,
    textAlign: 'center',
    color: '#333333'
  },
  link: {
    width: '100%',
    backgroundColor: 'rgba(240, 240, 240, .8)',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: '#4285f4'
  }
});

