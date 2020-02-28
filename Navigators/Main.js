import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Maps from '../screens/Maps';
import Cart from '../screens/Cart';
import Homepage from '../screens/Homepage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Main = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'md-home';
          } else if (route.name === 'Maps') {
            iconName = focused ? 'ios-map' : 'md-map';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#61a6ff',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default Main;
