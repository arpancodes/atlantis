import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import SearchBar from '../components/search-bar/search-bar';
import Geolocation from '@react-native-community/geolocation';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: {},
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(userlocation => {
      console.log('RUNNING');
      this.setState({userLocation: userlocation.coords}, () => {
        // console.log(this.state.userLocation);
      });
    });
  }
  // latitude: this.state.userLocation.latitude,
  // longitude: this.state.userLocation.latitude,
  render() {
    const {latitude, longitude} = this.state.userLocation;
    console.log(latitude, longitude);

    return (
      <View>
        {latitude && longitude === undefined ? (
          <View style={styles.maps}>
            <Text>PLEASE ENABLE LOCATION</Text>
          </View>
        ) : (
          <MapView
            style={styles.maps}
            region={{
              latitude: latitude || 12,
              longitude: longitude || 77,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            followsUserLocation={true}>
            <MapViewDirections
              origin={{latitude, longitude}}
              destination={{latitude: 37.771707, longitude: -122.4053769}}
              apikey="AIzaSyBtfLnAqqnEezNuYMuxPREmiYVkfJj7-LY"
            />
          </MapView>
        )}

        <SearchBar placeholder="Type here..." text="From" color="darkgreen" />
        <View style={{height: 10}}></View>
        <SearchBar
          text="To"
          placeholder="Where would you like to go?"
          color="darkgreen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maps: {height: '80%'},
});

export default Maps;
