import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
 // Assuming MainNav contains your app's navigation logic and screens
 import SplashScreen from '../Screens/SplashScreen';
 import SignIn from '../Screens/SignIn';
 import Home from '../Screens/Home'
 import FillingProcess from '../Screens/FillingProcess';
 import CylinderDelivery from '@/app/Screens/CylinderDelivery'

export default function index() {
  return (
    <View style={styles.main}>
      <CylinderDelivery/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    
  },
});
 