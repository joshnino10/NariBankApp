import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet,  } from 'react-native'

export default function Support() {
  return (
    <SafeAreaView style={styles.safearea}>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0

  },

})