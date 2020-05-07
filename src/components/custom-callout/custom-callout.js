import React from 'react';
import {Callout} from 'react-native-maps';
import {Text, View, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';

import logo from '../../images/google.png'
import fb from '../../images/fb.png';
import triangle from '../../images/triangle.png'

const CustomCallout = ({item}) => {
    const { name, address, schedule, discount, facebook } = item;
    const optional = discount ? (<React.Fragment>
        <Text style={style.text}>{discount}</Text>
        <View style={style.breakLine}/>
    </React.Fragment>) : null;
    return (
        <View style={style.wrapper}>
            <View style={style.window}>
                <TouchableOpacity>
                    <Text style={style.name}>{name}</Text>
                </TouchableOpacity>
                <View style={style.scrollView}>
                    <View style={style.breakLine}/>
                    <Text style={style.text}>{address}</Text>
                    <View style={style.breakLine}/>
                    <Text style={style.text}>{schedule}</Text>
                    <View style={style.breakLine}/>
                    {optional}
                </View>
                <View style={style.social}>
                    <Text style={{height: 45, marginHorizontal: 5}}>
                        <Image source={logo}  style={style.img}/>
                    </Text>
                </View>
            </View>
            <View style={style.arrow}/>
        </View>
    )
};



export default CustomCallout

const style = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
    },
    window: {
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        minWidth: 200,
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 30,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
        transform: [{rotate: "180deg"}]
    },
    name: {
        textAlign: 'center',
        fontFamily: 'PTSerif-Regular',
        fontSize: 18,
        color: '#35383B',
    },
    text: {
        opacity: 0.75,
        fontFamily: 'PTSerif-Regular',
        fontSize: 14,
        color: '#35383B',
        textAlign: 'center',
        width: 150
    },
    scrollView: {
        alignItems: 'center',
        width: 200

    },
    breakLine: {
        marginVertical: 5,
        opacity: 0.3,
        width: '100%',
        height: 1,
        backgroundColor: '#35383B',
    },
    social: {
        flexDirection: "row"
    },
    img: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: -20
    },
    arrowImg: {
        height: 30,

    }
});
