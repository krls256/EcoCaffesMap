import {Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

export default async (set_region) => {
  if(Platform.OS === 'android') {
    const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (response === 'granted') {
      findCurrentPosition(set_region);
    } else {

    }
  }
};
const findCurrentPosition = (set_region) => {
    Geolocation.getCurrentPosition(({coords}) => {
      set_region({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
    }, () => {
    })
};
