import {Marker} from "react-native-maps";
import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { View } from 'react-native';

const Markers =  ({dataBase, choose, crutch}) => {
  if (dataBase) {
    return dataBase.map(item => (
      <Marker coordinate={{
        latitude: +item.lat,
        longitude: +item.lng
      }}
              title={item.name}
              key={item.number}
              onPress={() => {
                choose(item);
                crutch(item);
              }}
      />
    ));
  }
  return <View/>
};

const mapStateToProps = ({dataBase}) => {
  return { dataBase }
};

export default connect(mapStateToProps, actions)(Markers)
