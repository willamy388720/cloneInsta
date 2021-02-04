import React, { Component } from 'react'
import { connect } from "react-redux";
import { login } from "../store/actions/user";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native'

class Login extends Component {

  state = {
    name: 'temp',
    email: '',
    password: '',
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile')
    }
  }

  login = () => {
    this.props.onLogin({ ...this.state })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.input}
          autoFocus={true} keyboardType='email-address' value={this.state.email}
          onChangeText={email => this.setState({ email })} />

        <TextInput placeholder='Senha' style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })} />

        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={styles.button}>
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

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)