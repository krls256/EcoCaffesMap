import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import * as actions from '../../actions'
import { connect } from 'react-redux'

const Settings = ({toggle_settings, settingsBar}) => {
  const area =  settingsBar ? {...style.area, ...style.areaActive} : style.area;
  const stripe1 = settingsBar ? {...style.stripe, ...style.activeStripe1} : style.stripe;
  const stripe2 = settingsBar ? {...style.stripe, ...style.activeStripe2} : style.stripe;
  const stripe3 = settingsBar ? {...style.stripe, ...style.activeStripe3} : style.stripe;
  return (
    <TouchableOpacity
      style={area}
      onPress={toggle_settings}>
      <View style={stripe1}/>
      <View style={stripe2}/>
      <View style={stripe3}/>
    </TouchableOpacity>
  )
};

const mapStateToProps = ({settingsBar}) => ({settingsBar});

export default connect(mapStateToProps, actions)(Settings);

const style = StyleSheet.create({
  area: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 40,
    height: 35,
    position: 'absolute',
    right: 15,
    top: 15,
    backgroundColor: "#fff",
  },
  areaActive: {
    paddingRight: 6
  },
  stripe: {
    marginVertical: 2,
    height: 3,
    width: 35,
    backgroundColor: '#8EBF45',
  },
  activeStripe1: {
    transform: [{rotate: '45deg'}, { translateX: 5 }]
  },
  activeStripe2: {
    display: 'none'
  },
  activeStripe3: {
    transform: [{rotate: '-45deg'}, { translateX: 5 }]
  },
});
