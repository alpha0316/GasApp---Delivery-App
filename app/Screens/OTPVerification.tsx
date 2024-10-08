import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
{/*import { auth, FIREBASE_AUTH } from './../../firebaseConfig';*/}
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const OTPVerification = ({navigation}) => {
  const [otp, setOtp] = useState(['','','',''])
  const inputsRef = useRef([])

  const handleInputChange = (value, index) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < inputsRef.current.length - 1){
      inputsRef.current[index + 1].focus()
    }
  }

  const isButtonDisabled = otp.some((value) => value === '')

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.label}>Enter OTP Code</Text>
      <Text style={{
        marginBottom : 24,
        color : 'rgba(0, 0, 0, 0.60)'
      }}>Enter the verification code we just sent to your mobile number</Text>

      <View style={{
          flexDirection : 'row',
          gap : 30,
          marginBottom : 12
      }}>
          {otp.map((value, index) => (
            <TextInput 
                key={index}
                ref ={(ref) => (inputsRef.current[index] = ref)}
                style={[
                  styles.input,
                  {
                    borderColor : value ? '#000' : 'rgba(0, 0, 0, 0.20)'
                  },
                  {
                    backgroundColor : value ? '#fff' : '#F4F4F4'
                  }
                ]}
                value={value}
                onChangeText={(text) => handleInputChange(text, index)}
                maxLength={1}
                keyboardType='numeric'
                autoCapitalize='none'
                returnKeyType='next'
            />
          ))}
      </View>

      <PrimaryButton title='Verify' disabled = {isButtonDisabled} onPress={() => navigation.navigate('Home')}/>
      <View style ={{
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center',
        marginTop : 24
      }}>
          <Text style={{
        
            color : 'rgba(0, 0, 0, 0.60)',
            fontSize : 14
          
          }}>Didn’t receive a code?  </Text>
          <Text style ={{
            fontWeight : '700',
            color : '#000'
          }}>Resend</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor : 'white'
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    marginTop : 50,
    fontWeight : '600'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    gap: '80%',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    marginBottom : 16,
    width : 50,
    alignItems : 'center',
    textAlign : 'center',
    fontSize : 20,
    fontWeight : '700'
  },
  text : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    gap : 4,
    marginTop :12
  }

});

export default OTPVerification;
