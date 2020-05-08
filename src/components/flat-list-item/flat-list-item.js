import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native';

const FlatListItem = ({fnc, set_region, item, suitableMarker}) => {
    const coords = {
        latitude: Number(item.lat),
        longitude: Number(item.lng),
    };
    return (
        <TouchableOpacity style={style.wrapper}
            onPress={() => {
                fnc();
                set_region(coords);
                suitableMarker.showCallout()
            }}>
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.address}>{item.address}</Text>
        </TouchableOpacity>
    )
};

export default FlatListItem;

const style = StyleSheet.create({
    wrapper: {
      borderBottomWidth: 1
    },
    name: {

        fontSize: 18,
        fontFamily: 'PTSerif-Regular',
    },
    address: {
        fontSize: 16,
        fontFamily: 'PTSerif-Regular',
    },
});
