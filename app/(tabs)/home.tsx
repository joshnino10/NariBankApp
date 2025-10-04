import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <SafeAreaView style={styles.safearea}>
      
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight:0
    },
})