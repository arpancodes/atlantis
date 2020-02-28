import React from 'react';
import {Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CartModal from './components/CartModal/CartModal';
import Main from './Navigators/Main';
import AgroTourModal from './components/AgroTourModal/AgroTourModal';

const App = () => {
  const config = {
    animation: 'timing',
    config: {
      duration: 220,
      easing: Easing.linear,
    },
  };

  const RootStack = createStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        mode="modal"
        initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="CartModal"
          component={CartModal}
          options={{
            cardStyle: {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <RootStack.Screen
          name="AgroTourModal"
          component={AgroTourModal}
          headerMode="screen"
          options={{
            cardStyle: {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
