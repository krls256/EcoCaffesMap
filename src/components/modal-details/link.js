import React, {useState} from 'react'
import { Text, Linking, StyleSheet, Alert, View } from 'react-native'


const Link = ({url, name}) => {
  let extraLink = url;
  if(!url) {
    return null
  }
  if (url.match(/(.*)\?/)) {
    extraLink = url.match(/(.*)\?/)[1];
  }
  return (
      <Text style={style.section}
            onPress={() => Linking.openURL(url)
              .catch(() => Linking.openURL(extraLink))
              .catch(() => {})}>
        {name}
      </Text>
  )
};

const style = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 0.5,
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Link;
