import React from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';

const Features = () => (
  <>
    <Text style={styles.title}>How Can we Help You today?</Text>
    <ScrollView horizontal style={styles.container}>
      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Weekend Getaway</Text>
      </View>
      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Visa Assitance</Text>
      </View>
      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Curated Tours</Text>
      </View>
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    padding: 10,
  },
  featureBox: {
    height: '97%',
    width: 300,
    borderRadius: 10,
    backgroundColor: '#02989e',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'flex-end',
    padding: 20,
  },
  title: {
    fontSize: 28,
    letterSpacing: -3,
    color: '#000',
    padding: 10,
    fontFamily: 'Lulo Clean W01 One Bold',
  },
  featureTitle: {
    fontFamily: 'Lulo Clean W01 One Bold',
    fontSize: 20,
    color: '#fff',
    width: '80%',
  },
});

export default Features;
