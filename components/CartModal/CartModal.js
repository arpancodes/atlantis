import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Services from '../Services/Services';

const CartModal = ({navigation, route}) => {
  const {services} = route.params;
  return (
    <View
      style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        clickable={true}
        style={{
          height: '50%',
          width: '100%',
          backgroundColor: 'transparent',
        }}></TouchableOpacity>
      <View
        style={{
          height: '70%',
          width: '100%',
          backgroundColor: '#ade0e9',
          borderRadius: 35,
        }}>
        <Text style={styles.title}>Schedule a visit</Text>
        <View
          style={{
            width: '87%',
            height: 5,
            backgroundColor: 'black',
            alignSelf: 'center',
          }}></View>
        {/* <ScrollView>
        <Services services={route.services} />
        <View
          style={{
            width: '40%',
            height: 2,
            backgroundColor: 'black',
            alignSelf: 'center',
          }}></View>
        <Services services={route.services} />
        <View
          style={{
            width: '40%',
            height: 2,
            backgroundColor: 'black',
            alignSelf: 'center',
          }}></View>
        <Services services={route.services} />
      </ScrollView> */}
        <FlatList
          data={services}
          renderItem={({item}) => <Services item={item} />}
          keyExtractor={item => item.pic}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    letterSpacing: -3,
    color: '#000',
    fontFamily: 'Lulo Clean W01 One Bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default CartModal;
