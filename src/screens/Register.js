import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  }

  login = () => {
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Name' style={styles.input}
          autoFocus={true} value={this.state.name}
          onChangeText={name => this.setState({ name })} />

        <TextInput placeholder='Email' style={styles.input}
          keyboardType='email-address' value={this.state.email}
          onChangeText={email => this.setState({ email })} />

        <TextInput placeholder='Senha' style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })} />

        <TouchableOpacity onPress={() => { }} style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  textButton: {
    fontSize: 20,
    color: '#FFF'
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15,
  },
})