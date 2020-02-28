import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from '../components/search-bar/search-bar';
import Geolocation from '@react-native-community/geolocation';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }
  render() {
    return (
      <View>
        <Text>CART</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Cart: {height: '80%'},
});

export default Maps;
