import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

class Login {
   render() {
    const onClickHandler = () => {
      setName('Trinobeast')
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff00w',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 10,
      borderColor: '#ff00ff',
      borderRadius: 10,
      margin: 40,
    },
    text: {
      fontSize: 40
    }
  });
}
