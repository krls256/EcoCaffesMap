import React from 'react'
import {StyleSheet, View, Text, Dimensions, Linking} from 'react-native'

const InfoBox = ({name, description}) => {
  if (name && description) {
    return (
      <View style={style.window}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.description}>{description}</Text>
        <Text style={style.link}
              onPress={() => Linking.openURL('https://www.instagram.com/p/B-SMoXUFm9G/')}>
          Important info
        </Text>
      </View>
    )
  }
  return <View/>
};
export default InfoBox;

const BoxWidth = 300;
const style = StyleSheet.create({
  window: {
    width: BoxWidth,
    height: 150,
    position: 'absolute',
    bottom: 40,
    left: (Dimensions.get('window').width -  BoxWidth)/2,
    borderRadius: 30,
  },
  name: {
    width: '100%',
    backgroundColor: 'rgba(240, 240, 240, .8)',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '400',
    color: '#4285f4',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, .8)',
    alignItems: 'center',
    fontSize: 14,
    textAlign: 'center',
    color: '#333333'
  },
  link: {
    width: '100%',
    backgroundColor: 'rgba(240, 240, 240, .8)',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '400',
    color: '#4285f4'
  }
});

