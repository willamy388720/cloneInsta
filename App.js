import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import Header from './src/components/Header'

export default class App extends Component {
  render() {
    return (
      <Header />
    )
  }
}

const styles = StyleSheet.create({

})