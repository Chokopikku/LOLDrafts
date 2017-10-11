import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Expo from 'expo';
import { styles } from '../styles/Styles.js'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'VincHand': require('../fonts/VincHand-Regular.ttf'),
      'AvantGarde': require('../fonts/AvantGarde-Regular.ttf'),
      'OpenSans': require('../fonts/Open_Sans/OpenSans-Regular.ttf'),
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    const { navigate } = this.props.navigation;
    const champData = this.props.navigation.state.params.champ;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {champData.champion.body + ' Counters \n'}
          </Text>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            {'Jax'}
          </Text>
          <Text style={styles.counterText}>
            {'Teemo'}
          </Text>
          <Text style={styles.counterText}>
            {'Pantheon'}
          </Text>
          <Text style={styles.counterText}>
            {'Fiora'}
          </Text>
          <Text style={styles.counterText}>
            {'Riven'}
          </Text>
        </View>
      </View>
    );
  }
}
