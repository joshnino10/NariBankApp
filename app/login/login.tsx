import CustomButton from '@/components/CustomButton/CustomButton'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Image, Keyboard, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'

export default function Login() {
  const [pin, setPin] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    if (pin.length !== 6) {
      Alert.alert('Error', 'Please enter your 6-digit PIN')
      return
    }
    // Validate PIN here
    console.log('Login with PIN:', pin)
    // Navigate to home or dashboard
    // router.push('')
  }

  const handleForgotPin = () => {
    // Navigate to forgot PIN screen
    console.log('Forgot PIN pressed')
    // router.push('/forgot-pin')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.page}>
          <View>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/images/small logo.png')}/>
              <Text style={styles.logoText}>Nari</Text>
            </View>

            <View style={styles.titlecontainer}>
              <Text style={styles.title}>Enter Your 6-Digit Login PIN</Text>
            </View>

            <View style={styles.inputContainer}>
              <OtpInput
                numberOfDigits={6}
                value={pin}
                onTextChange={setPin}
                 placeholder="•"
                secureTextEntry={true}
                theme={{
                  containerStyle: styles.otpContainer,
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                  focusStickStyle: styles.focusStick,
                }}
              />
              
              <TouchableOpacity onPress={handleForgotPin} style={styles.forgotPinButton}>
                <Text style={styles.forgotPinText}>Forgot PIN?</Text>
              </TouchableOpacity>
            </View>

          <View style={styles.buttonContainer}>
            <CustomButton title='Login' onPress={handleLogin}/>
          </View>
          </View>

        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  page: {
    flex: 1,
    paddingHorizontal: 16

  },
  logoContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 40,
    height: 40
  },
  logoText: {
    fontFamily: 'ArchivoBlack',
    fontSize: 20,
    color: '#1A35BD',
    fontWeight: '400',
  },
  titlecontainer: {
    marginTop: 150,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: "intersemibold",
    textAlign: 'center',
    color: '#000'
  },
  inputContainer: {
    marginTop: 40,
    alignItems: 'center'
  },
  otpContainer: {
    marginVertical: 10
  },
  pinCodeContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F7F7F7',
    borderWidth: 0
  },
  pinCodeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  focusStick: {
    backgroundColor: '#1A35BD'
  },
  forgotPinButton: {
    marginTop: 20,
    alignSelf:'flex-end',
  },
  forgotPinText: {
    fontSize: 16,
    fontFamily: 'interregular',
    color: '#1A35BD',
    justifyContent:'flex-end',
 
  },
  buttonContainer: {
    marginTop: 30
  }
})