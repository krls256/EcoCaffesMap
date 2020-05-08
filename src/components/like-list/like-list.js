import React from 'react'
import { Modal, StyleSheet, View, FlatList,  Text } from 'react-native';
import {connect} from 'react-redux'
import * as actions from '../../actions'
import FlatListItem from '../flat-list-item';

const LikeList = ({like_list_false, set_region , dataBase, allMarkersRef, likeList}) => {
    return (
        <Modal animationType="slide"
               transparent
        >
            <View style={style.window}>
                <Text style={style.title}>Улюблені заклади</Text>
                <FlatList   style={style.list}
                            data={dataBase}
                            keyExtractor={item => item.number}
                            renderItem={({item}) => {
                                if(likeList.find(it => it === item.number)) {
                                    return <FlatListItem fnc={like_list_false}
                                                         set_region={set_region}
                                                         item={item}
                                                         suitableMarker={allMarkersRef[item.number]}/>
                                }
                                return null;
                            }}/>
                 <Text style={{...style.title, ...style.back}}
                        onPress={like_list_false}>Назад</Text>
            </View>

        </Modal>

    )
};

const mapStateToProps = ({dataBase, allMarkersRef, likeList}) => ({
    dataBase, allMarkersRef, likeList
});

export default connect(mapStateToProps, actions)(LikeList);

const style = StyleSheet.create({
    window: {
        width: '100%',
        height: '70%',
        backgroundColor: '#fff',
        marginTop: '59%',
    },
    list: {
        marginTop: 35,
        padding: 15,
        ...StyleSheet.absoluteFillObject
    },
    title: {
        height: 35,
        backgroundColor: '#fff',
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        lineHeight: 35,
        fontFamily: 'PTSerif-Bold'
    },
    back: {
        position: 'absolute',
        bottom: 5,
    }
});
