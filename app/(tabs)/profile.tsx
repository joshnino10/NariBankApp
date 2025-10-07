import ProfileDetails from '@/components/ProfileComponent/ProfileDetails'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet,   } from 'react-native'

export default function Profile() {


  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="light-content" backgroundColor="#1A35BD" />
      <ProfileDetails/>
      
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