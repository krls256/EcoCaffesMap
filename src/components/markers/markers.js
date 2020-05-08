import {Callout, Marker} from 'react-native-maps';
import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import {Linking, View} from 'react-native';
import CustomCallout from '../custom-callout';

import img from '../../images/cafepoint.png'

const Markers =  ({dataBase, choose, add_marker}) => {
  if (dataBase) {
    return dataBase.map(item => {
        return <Marker ref={(marker) => add_marker(marker, item.number)}
            coordinate={{
            latitude: +item.lat,
            longitude: +item.lng
        }}
                image={img}
                key={item.number}
                onPress={() => {
                    choose(item);
                }}
        >
            <Callout tooltip
                onPress={() => Linking
                    .openURL(`https://www.google.com.ua/maps/place/${item.lat},${item.lng}/@${item.lat},${item.lng},15z`)}>
                <CustomCallout item={item}/>
            </Callout>

        </Marker>
        }

    );
  }
  return <View/>
};

const mapStateToProps = ({dataBase}) => ({
    dataBase
    })
;

export default connect(mapStateToProps, actions)(Markers)
