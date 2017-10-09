import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './assets/components/HomeScreen'
import SearchScreen from './assets/components/SearchScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
});

export default App;
