import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import InfoBox from '../info-box';

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      currentMarker: null,
      initialRegion: {
        latitude: 49.839494,
        longitude: 24.031848,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
      }
    };
    this.setPermissions = async () => {
      if(Platform.OS === 'android') {
        const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (response === 'granted') {
          this.findCurrentPosition();
        }
      }
    };
    this.findCurrentPosition = () => {
      Geolocation.getCurrentPosition(({coords}) => {
        this.setState({
          initialRegion: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.0225,
            longitudeDelta: 0.00875
          }
        })
      })
    }
  }
  componentDidMount() {
    this.setPermissions();
  }

  render() {
    const { base } = this.props;
    const markers = base.map(item => (
      <Marker coordinate={{
        latitude: +item.lat,
        longitude: +item.lng
      }}
              title={item.name}
              key={item.number}
              onPress={() => this.setState({currentMarker: {
                name: item.name,
                description: item.description
                }})}
      />
    ));

    return (
      <View style={style.container}>

        <MapView style={style.map}
                 showsUserLocation={true}
                 ref={map => this._map = map}
                 provider={PROVIDER_GOOGLE}
                 initialRegion={this.state.initialRegion}
                  onPress={() => this.setState({currentMarker: null})}>
          {markers}
        </MapView>
        <InfoBox name={this.state.currentMarker?.name}
                 description={this.state.currentMarker?.description}
        />
      </View>
    )
  }
};

const style = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  container: {
    ...StyleSheet.absoluteFillObject
  }
});
