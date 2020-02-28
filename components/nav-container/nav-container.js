import React from 'react';

import {View, StyleSheet} from 'react-native';

import NavButton from '../nav-buttons/nav-buttons';

const NavContainer = () => (
  <View style={styles.ButtonsContainer}>
    <View style={styles.ButtonsRowContainer}>
      <NavButton icon="restaurant" color="#c4162a" title="Local Cousine" />
      <NavButton icon="agroTourism" color="#34a345" title="Agro Tourism" />
      <NavButton icon="SchoolTrips" color="#1673c4" title="School Trips" />
    </View>
    <View style={styles.ButtonsRowContainer}>
      <NavButton icon="holidayHomes" color="#54030d" title="Holiday Homes" />
      <NavButton icon="TravelCredits" color="#edab47" title="Travel Credits" />
      <NavButton icon="Forex" color="#c49616" title="Forex" />
    </View>
    <View style={styles.ButtonsRowContainer}>
      <NavButton full icon="ThingsToDo" color="#00590e" title="Things to do" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  ButtonsContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    margin: 30,
    height: 350,
    justifyContent: 'space-around',
    // borderWidth: 2,
    // borderStyle: 'solid',
  },
  ButtonsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'stretch',
    // marginTop: -50,
    height: 115,
    // borderWidth: 2,
    // borderStyle: 'solid',
  },
});

export default NavContainer;
