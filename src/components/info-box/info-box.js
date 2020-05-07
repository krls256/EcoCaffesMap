import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Linking} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Link from '../link';

import plus from '../../images/plusik.png'
import minus from '../../images/minusik.png'
import fb from '../../images/fb.png'
import insta from '../../images/insta.png'


const InfoBox = ({currentMarker, likeList, pull_like}) => {
    if (currentMarker) {
      const inLikeList = likeList.find(item => item === currentMarker.number);
      const likeImage = inLikeList ? minus : plus;

      const {facebook, instagram} = currentMarker;
      const fbContent = facebook ? <Link img={fb} url={facebook}/> : null;
      const instaContent = instagram ? <Link img={insta} url={instagram}/>: null;

    return (
        <View style={style.wrapper}>
            {fbContent}
          <TouchableOpacity style={style.imgWrap}
            onPress={() => {pull_like(currentMarker.number)}}>
            <Image source={likeImage} style={style.img}/>
          </TouchableOpacity>
            {instaContent}
        </View>
    )
  }
  return <View/>
};
const mapStateToProps = ({currentMarker, likeList}) => ({currentMarker, likeList})
;
export default connect(mapStateToProps, actions)(InfoBox);

const style = StyleSheet.create({
  wrapper: {
      position: 'absolute',
      bottom: 40,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
  },
    imgWrap: {
        width: 50,
        height: 50,
        marginHorizontal: 15,
    },
    img: {
        width: '100%',
        height: '100%'
    }
});


