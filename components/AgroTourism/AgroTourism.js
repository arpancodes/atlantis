import React from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const AgroTourism = ({navigation, services}) => {
  return (
    <>
      <Text style={styles.title}>Discover Agro-Tourism</Text>
      <ScrollView horizontal style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AgroTourModal')}
          style={styles.featureBox}>
          <Text style={styles.featureTitle}>What Is Agro-Tourism?</Text>
        </TouchableOpacity>
        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>AGRO-TOURS</Text>
          <Button
            onPress={() =>
              navigation.navigate('CartModal', {services: services})
            }
            color="green"
            title="Book Now"
          />
        </View>
      </ScrollView>
    </>
  );
};
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
    backgroundColor: '#31a409',
    marginLeft: 5,
    marginRight: 5,
    // justifyContent: 'flex-end',
    padding: 20,
  },
  title: {
    fontSize: 28,
    letterSpacing: -3,
    color: '#000',
    fontFamily: 'Lulo Clean W01 One Bold',
    padding: 10,
  },
  featureTitle: {
    fontFamily: 'Lulo Clean W01 One Bold',
    fontSize: 20,
    color: '#fff',
    // width: '80%',
  },
});

export default AgroTourism;
