import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  TextInput,
} from 'react-native';
import Expo from 'expo';
import { styles } from '../styles/Styles.js'
import data from '../data/Data.json'

export default class SearchScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      isReady: false,
      dataSource: ds.cloneWithRows(data),
    };
  }
  filterSearch(text){
    const newData = data.filter(function(item){
      const itemData = item.champion.id.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'VincHand': require('../fonts/VincHand-Regular.ttf'),
      'AvantGarde': require('../fonts/AvantGarde-Regular.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => this.filterSearch(text)}
            value={this.state.text}
            placeholder={'Search...'}
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
            autoFocus={true}
          />
        </View>
        <ListView
          style={styles.searchList}
          enableEmptySections={true}
          renderRow={(r) =>
            <TouchableOpacity onPress={() => navigate('Home')}>
              <Text style={styles.searchListText}>{r.champion.body}</Text>
            </TouchableOpacity>
          }
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}
