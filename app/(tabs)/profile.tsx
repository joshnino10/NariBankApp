import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Profile() {
  return (
    <SafeAreaView style={styles.safearea}>
      <Text>profile</Text>
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