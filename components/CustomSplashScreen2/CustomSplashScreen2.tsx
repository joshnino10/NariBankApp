import React from 'react'
import { Image, StatusBar, StyleSheet,  View } from 'react-native'

export default function CustomSplashScreen2() {
  return (
    <View style={styles.page}>
        <StatusBar barStyle="light-content" backgroundColor="blue"/>
     <Image style={styles.logo} source={require("../../assets/images/Logo 5 1.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },

    logo:{
        width:250,
        height:250

    }
})