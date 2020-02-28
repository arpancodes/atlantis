import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Services = ({item: {title, pic, desc}}) => {
  console.log(pic);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/dragon.jpg')}
        style={{width: '100%', height: '40%'}}
      />
      <View
        style={{
          width: '60%',
          alignSelf: 'flex-start',
          // borderStyle: 'solid',
          // borderWidth: 2,
          width: '100%',
          padding: 10,
        }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '40%',
          height: 2,
          backgroundColor: 'black',
          alignSelf: 'center',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 3,
    // borderStyle: 'solid',
    width: '90%',
    alignSelf: 'center',
    height: 350,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    letterSpacing: -5,
    color: '#000',
    fontFamily: 'Lulo Clean W01 One Bold',
    padding: 10,
    textAlign: 'right',
    marginTop: -150,
    backgroundColor: '#e3faf9',
    alignSelf: 'flex-start',
    width: 'auto',
  },
  bookButton: {
    width: 130,
    justifyContent: 'center',
    backgroundColor: '#1d3e40',
    padding: 10,
    height: 50,
  },
  desc: {
    fontWeight: 'bold',
  },
});

export default Services;
