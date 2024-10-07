import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
{/*import { auth, FIREBASE_AUTH } from './../../firebaseConfig';*/}
import PrimaryButton from '@/components/PrimaryButton';
import BackButton from '@/components/BackButton';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const SignIn = () => {
  {/*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const auth = FIREBASE_AUTH

   const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword (auth, email, password)
      console.log(response)
    } catch (error) {
      console.error('Error signing in: ', error);
      alert('Sign in failed:' + error.message);
    } finally{
      setLoading(false)
    }
  };*/}
  


  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>General Details</Text>
      </View>
      <Text style={styles.label}>Enter Your Phone Number</Text>
      <TextInput
        style={styles.input}
        //value={email}
        //onChangeText={setEmail}
        //keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={{
        marginBottom : 24
      }}>An OTP code will be sent to your number for verification</Text>
      {/*<Button title="Sign In" onPress={handleSignIn} />*/}
      <PrimaryButton title='Continue'/>
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
    fontWeight : '400'
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
    marginBottom : 16
  },
  text : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    gap : 4,
    marginTop :12
  }

});

export default SignIn;
