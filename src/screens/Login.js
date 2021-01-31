import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default class Login extends Component {

  state = {
    email: '',
    password: '',
  }

  login = () => {
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.input}
          autoFocus={true} keyboardType='email-address' value={this.state.email}
          onChange={email => this.setState({ email })} />

        <TextInput placeholder='Senha' style={styles.input}
          autoFocus={true} secureTextEntry={true}
          value={this.state.password}
          onChange={password => this.setState({ password })} />

        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={styles.button}>
          <Text style={styles.textButton}>Criar nova conta...</Text>
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
  },
})