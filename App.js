import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native'

import Header from './src/components/Header'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Alonso Onso',
      comment: 'Meu sertão'
    },
    {
      nickname: 'Anonymus Desconhecido',
      comment: 'A seca daí, só perde pra xereca da tua mulher'
    }]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})