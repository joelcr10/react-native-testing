/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text,TextInput, StyleSheet,  TouchableOpacity} from 'react-native';
import ButtonComponent from '../component/ButtonComponent';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeading}>Login</Text>
      <View>
          <Text>Username</Text>
          <TextInput style={styles.input} placeholder='Enter username'/>
      </View>
      <View>
          <Text>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter Password'/>
      </View>

      <Text style={styles.forgot}>Forgot Password?</Text>

      <ButtonComponent />

    </View>
  );
};

const styles = StyleSheet.create({
  loginHeading:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    marginLeft: 0,
  },


  container:{
    padding: 40,
    // paddingTop: 100,
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    height: 600,
  },

  forgot:{
    color: 'blue',
  }
});

export default Login;
