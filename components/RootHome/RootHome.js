import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Homepage from '../../screens/Homepage';
import CartModal from '../CartModal/CartModal';

const RootStack = createStackNavigator();

function RootHome() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={Homepage}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="CartModal" component={CartModal} />
    </RootStack.Navigator>
  );
}

export default RootHome;
