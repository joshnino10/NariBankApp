import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SupportHeader() {
    const router  = useRouter()

    const goBack = ()=> {
        router.push('/(tabs)/home')
    }
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar barStyle="light-content"/>
        <View style={styles.content}>
            <TouchableOpacity onPress={goBack}>
             <Image style={styles.icon} source={require('../../assets/images/arrowBackWhite.png')}/>
            </TouchableOpacity>

             <Text style={styles.text}>Support</Text>
            <View style={styles.icon}/>
        </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

     container: {
        backgroundColor: '#1A35BD',
        paddingTop: Platform.OS === 'android'? 10 : 5, 
        
      },
      content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom:30
      },

      icon:{
        width:20,
        height:40,
        color: "#E8EBF8"

      },

      text:{
        fontFamily: "intersemibold",
        fontSize: 20,
        color: '#FFFFFF',

      },
})