import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Logo from '../CustomIcons/CustomIcons';

const Header = () => (
  <>
    <View style={styles.HeaderContainer}>
      <Logo name="logo" size={30} />
      <Text style={styles.HeaderText}>Atlantis</Text>
    </View>
    <View style={styles.HeroSection}>
      <Text style={styles.subtitle}>AMBITION IS THE FIRST STEP TOWARDS</Text>
      <Text style={styles.title}>Travel</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  HeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 20,
    flexDirection: 'row',
    marginTop: -25,
  },
  HeaderText: {
    fontSize: 28,
    fontFamily: 'Lulo Clean W01 One Bold',
    marginLeft: 5,
  },
  HeroSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 20,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignSelf: 'center',
  },
  title: {
    fontSize: 48,
    fontFamily: 'Lulo Clean W01 One Bold',
    color: '#fff',
  },
  subtitle: {
    fontFamily: 'Avenir_LT_35_Light',
    letterSpacing: 5,
    fontSize: 17,
    lineHeight: 23,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    color: '#fff',
  },
});

export default Header;
