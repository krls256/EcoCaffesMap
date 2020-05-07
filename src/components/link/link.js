import React from 'react'
import {Linking, StyleSheet, Image, TouchableOpacity} from 'react-native';



const Link = ({url, img}) => {
  let extraLink = url;
  if(!url) {
    return null
  }
  if (url.match(/(.*)\?/)) {
    extraLink = url.match(/(.*)\?/)[1];
  }
  return (
      <TouchableOpacity style={style.imgWrap}
            onPress={() => Linking.openURL(url)
              .catch(() => Linking.openURL(extraLink))
              .catch(() => {})}>
        <Image source={img} style={style.img}/>
      </TouchableOpacity>
  )
};

const style = StyleSheet.create({
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

export default Link;
