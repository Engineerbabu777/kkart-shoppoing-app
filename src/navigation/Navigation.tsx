import {StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '@modules/onboard';
import Home from '@modules/home';
import {navigationRef} from './NavigationUtil';
import MainNavigator from './MainNavigator';
import ProductList from '@modules/products';
import Cart from '@modules/cart';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Products" component={ProductList} />
        <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
