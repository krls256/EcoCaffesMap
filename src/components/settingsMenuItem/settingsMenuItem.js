import React from 'react';
import {View, TouchableOpacity,StyleSheet, Text, Image} from 'react-native';
import * as actions from '../../actions';
import { connect } from 'react-redux';



const SettingsMenuItem = ({header, subheader, img, fnc, toggle_settings, discard}) => {
    return (
        <TouchableOpacity style={style.wrapper}
                onPress={() => {
                    fnc();
                    toggle_settings();
                    discard();
                }}>
            <View style={style.content}>
                <View style={style.imageWrapper}>
                    <Image
                        style={style.image}
                        source={img}/>
                </View>
                <View style={style.textWrapper}>
                    <Text style={style.mainText}>{header}</Text>
                    <Text style={style.submainText}>{subheader}</Text>
                </View>
            </View>
            <View style={style.link}>
                <View style={{...style.linkStripe, ...style.linkStripe1}}/>
                <View style={{...style.linkStripe, ...style.linkStripe2}}/>
            </View>
        </TouchableOpacity>
    )
};

export default connect(null, actions)(SettingsMenuItem);

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 70,
    },
    content: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: '100%',
        width: '70%'
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
    },
    image: {
        width: '40%',
        height: '40%'
    },
    textWrapper: {
        justifyContent: 'center'

    },
    mainText: {
        color: '#42423C',
        fontSize: 14,
        fontFamily: 'PTSerif-Regular',
    },
    submainText: {
        color: '#42423C',
        fontSize: 11,
        fontFamily: 'PTSerif-Regular',
    },
    link: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkStripe: {
        width: 18,
        height: 3,
        marginVertical: 4,
        backgroundColor: '#8EBF45',
    },
    linkStripe1: {
        transform: [{rotate: '45deg'}]
    },
    linkStripe2: {
        transform: [{rotate: '-45deg'}]
    },
});
