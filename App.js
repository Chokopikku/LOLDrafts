import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './assets/components/HomeScreen'
import SearchScreen from './assets/components/SearchScreen'
import ChampScreen from './assets/components/ChampScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  Champ: { screen: ChampScreen },
});

export default App;
