import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as actions from '../../actions'
import { connect } from 'react-redux'

const Settings = ({reset_initial_city}) => {
  return (
    <TouchableOpacity
      style={style.area}
      onPress={reset_initial_city}>
      <Image
        source={require('../../../files/Settings.png')}
        style={style.img}/>
    </TouchableOpacity>
  )
};

export default connect(null, actions)(Settings);

const style = StyleSheet.create({
  area: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  img: {
    width: '100%',
    height: '100%'
  },
});
