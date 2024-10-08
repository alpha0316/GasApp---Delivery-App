import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
 import MainNav from './MainNav';

export default function index() {
  return (
    <View style={styles.main}>
      <MainNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
 