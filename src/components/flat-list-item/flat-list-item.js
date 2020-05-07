import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity } from 'react-native';

const FlatListItem = ({name, address, fnc}) => {
    return (
        <TouchableOpacity style={style.wrapper}
            onPress={fnc}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.address}>{address}</Text>
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
