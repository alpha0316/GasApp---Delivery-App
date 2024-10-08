import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import SplashScreen from '../Screens/SplashScreen';
import PhoneNumber from '../Screens/PhoneNumber';
import Home from '../Screens/Home'
import FillingProcess from '../Screens/FillingProcess';
import CylinderDelivery from '@/app/Screens/CylinderDelivery'
import OTPVerification from '@/app/Screens/OTPVerification';


const Stack = createNativeStackNavigator();

export default function MainNav() {
  
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="FillingProcess" component={FillingProcess} options={{ headerShown: false }} />
          <Stack.Screen name="CylinderDelivery" component={CylinderDelivery} options={{ headerShown: false }} />
          <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
