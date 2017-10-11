import React, { Component } from 'react';
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  View,
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
  componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
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
    const showComingSoonAlert = () => {
      Alert.alert( 'Coming soon...' )
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {'LOLDrafts -alpha- \n'}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigate('Search')}>
            <Text style={styles.buttonText}>
              {'Search Champion'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ showComingSoonAlert }>
            <Text style={styles.buttonText}>
              {'Send Feedback'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.banner}>
        </View>
      </View>
    );
  }
}
