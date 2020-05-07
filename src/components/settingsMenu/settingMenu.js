import React from 'react';
import {View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import SettingsMenuItem from '../settingsMenuItem';
import * as actions from '../../actions'
import caffe from '../../images/caffe.png'
import home from '../../images/home.png'

const SettingsMenu = ({settingsBar, reset_initial_city, like_list_true}) => {
    const stl = settingsBar ? null : style.unactive;
    return (
        <View style={{...style.layout, ...stl}}>
            <SettingsMenuItem img={caffe}
                              header={'Улюблене Кафе'}
                              subheader={'Перейти за посиланням'}
                              fnc={like_list_true}
            />
            <View style={style.breakLine}/>
            <SettingsMenuItem img={home}
                              header={'Моя домівка'}
                              subheader={'Змінити стартове місто'}
                              fnc={reset_initial_city}
            />
        </View>
    )
};

const mapStateToProps = ({settingsBar}) => ({settingsBar});

export default connect(mapStateToProps, actions)(SettingsMenu)

const style = StyleSheet.create({
    layout: {
        position: 'absolute',
        width: '100%',
        backgroundColor: "#fff",
        bottom: 0,
        alignItems: 'center'
    },
    unactive: {
        transform: [{translateY: 300}]
    },
    breakLine: {
        width: '80%',
        height: 1,
        backgroundColor: '#8EBF45'
    }
});
