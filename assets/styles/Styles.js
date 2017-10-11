import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginTop: 26,
  },
  title: {
    fontFamily: 'VincHand',
    fontSize: 36,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'VincHand',
    fontSize: 32,
    margin: 32,
  },
  counterContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  counterText: {
    fontFamily: 'AvantGarde',
    fontSize: 28,
    margin: 20,
  },
  banner: {
    alignSelf: 'center',
    borderWidth: 1,
    bottom: 10,
    height: 50,
    width: 320,
  },
  searchInput: {
    alignSelf: 'center',
    fontFamily: 'VincHand',
    fontSize: 36,
    textAlign: 'center',
    width: 180,
  },
  searchList: {
    alignSelf: 'stretch',
  },
  searchListText: {
    alignSelf: 'center',
    fontFamily: 'AvantGarde',
    fontSize: 24,
    margin: 6,
  },
});
