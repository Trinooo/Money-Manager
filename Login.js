import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground} from 'react-native';
import { useState } from 'react';

/*
 * Name of Program: Login.js
 *
 * Description: This program will create the login page for a user in order to either sign into their already
 * existing account or register for an account if they do not currently have one. This will also contain a
 * forgot your password in which users can reset their password if they somehow forget or misplace their password.
 *
 * Date Created: 01/01/2022
 *
 * Date Modified: 01/01/2021
*/

function Login() {

  const image = {uri: "https://media.istockphoto.com/vectors/multicolored-pastel-abstract-background-light-gradient-diffused-white-vector-id1179215846?k=20&m=1179215846&s=612x612&w=0&h=RPzoPqsJQMy1821H93H70nL8y7dssTuk7D58wvBmK3Y="};

  return (
    <View style = {styles.container}>
    <ImageBackground source = {image}
      resizeMode = "resize">
      <TextInput
        style = {styles.usernameBox}
        placeholder="Username.."
      />
      <TextInput
        style = {styles.passwordBox}
        placeholder = "Password.."
      />
      <View style = {styles.loginAndRegister}>
          <Button
            title = "Login"
            color = "#add8e6"
          />
      </View>
      <View style = {styles.loginAndRegister}>
          <Button
            title = "Register"
            color = "#add8e6"
          />
      </View>
      </ImageBackground>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  usernameBox: {
    flex: 1,
    borderColor: "#D3D3D3",
    borderWidth: 2,
    borderRadius: 10,
    padding: 3,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    autoComplete: 'username',
    margin: 5
  },
  passwordBox: {
    flex: 1,
    borderColor: "#D3D3D3",
    borderWidth: 2,
    borderRadius: 10,
    padding: 3,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    secureTextEntry: true,
    margin: 5
  },
  loginAndRegister: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 5
  }
})
