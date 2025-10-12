import LinkedCard from '@/components/CardComponent/LinkedCard'
import React from 'react'
import { Platform, SafeAreaView, StyleSheet, StatusBar as RNStatusBar } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function Card() {
  return (
    <SafeAreaView style={styles.safearea}>
       <StatusBar style='dark' backgroundColor='white'/>
      <LinkedCard/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0
  },
})