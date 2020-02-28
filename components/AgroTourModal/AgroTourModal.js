import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class AgroTourModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.card, {backgroundColor: '#57bbbf'}]}>
          <Text style={styles.title}>Why Agrotourism?</Text>
          <Text style={styles.para}>
            Urban citizens have become more interested in how their food is
            produced. They want to meet & stay with farmers, want to experience
            about what goes into food harvesting.
          </Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#3a7c80'}]}>
          <Text style={styles.title}>Who are we?</Text>
          <Text style={styles.para}>
            While you seek the perfect holiday experience with family & friends,
            you will find the perfect accommodation, traditional food & farm
            activities in beautiful countryside. We would like to bridge the gap
            between urban & rural life
          </Text>
        </View>
        <View style={[styles.card, {backgroundColor: '#2d8149'}]}>
          <Text style={styles.title}>What for me?</Text>
          <Text style={styles.para}>
            Farmstay experience a unique holiday at the countryside off the
            beaten track in sync with the farmer community. Here, timeless
            villages, carved temples, sky kissed mountain trails and a way of
            life that has hardly changed over the past centuries, are just
            waiting to be discovered
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7e9f1',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // borderWidth: 2,
    // borderStyle: 'solid',
    margin: 5,
    width: '90%',
    height: 210,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    letterSpacing: -3,
    color: '#000',
    fontFamily: 'Lulo Clean W01 One Bold',
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  },
  para: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AgroTourModal;
