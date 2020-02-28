import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from '../CustomIcons/CustomIcons';
import FaIcon from 'react-native-vector-icons/MaterialIcons';

const NavButton = ({icon, title, color, full}) => (
  <TouchableOpacity
    style={[styles.ButtonContainer, full ? styles.fullWidth : '']}>
    <View style={styles.Button}>
      {title === 'Local Cousine' ? (
        <FaIcon name={icon} color={color} size={40} />
      ) : (
        <Icon name={icon} color={color} size={40} />
      )}
      <Text style={styles.ButtonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  Button: {
    alignItems: 'center',
    padding: 10,
  },
  ButtonContainer: {
    width: '33%',
    backgroundColor: '#e3faf9',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderStyle: 'solid',
  },
  fullWidth: {
    width: '99%',
  },
});

export default NavButton;
