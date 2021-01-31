import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Gravatar } from "react-native-gravatar"

export default class Feed extends Component {

  logout = () => {

  }



  render() {
    const options = { email: 'ze_cabras@email.com', secure: true }
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>Zé das Cabras</Text>
        <Text style={styles.email}>ze_cabras@email.com</Text>
        <TouchableOpacity onPress={this.logout} style={styles.button}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  textButton: {
    fontSize: 20,
    color: '#FFF'
  }
})