import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '@utils/Constants';
import Home from '@modules/home';
import Cart from '@modules/cart';
import Categories from '@modules/categories';
import Account from '@modules/account';

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
        tabBarStyle: {paddingTop: Platform.OS === 'ios' ? 10 : 0},
        lazy: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
