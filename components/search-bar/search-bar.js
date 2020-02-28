import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SearchBar = ({onChange, inputText, color, text, placeholder}) => (
  <View style={[styles.searchSection, {borderColor: color}]}>
    {text ? (
      <Text style={styles.searchIcon}>{text}</Text>
    ) : (
      <Icon style={styles.searchIcon} color={color} name="search" size={20} />
    )}

    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      underlineColorAndroid="transparent"
      value={inputText}
    />
  </View>
);

const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '95%',
    alignSelf: 'center',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#424242',
  },
});

export default SearchBar;
