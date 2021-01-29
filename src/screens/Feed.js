import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Rafael Pereira Filho',
      email: 'rafaelprrflh@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'Alonso Onso',
        comment: 'Meu sertão'
      },
      {
        nickname: 'Anonymus Desconhecido',
        comment: 'A seca daí, só perde pra xereca da tua mulher'
      }]
    }, {
      id: Math.random(),
      nickname: 'Francisco Leandro Lima',
      email: 'fllima@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: []
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})