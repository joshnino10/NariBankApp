import LinkedCard from '@/components/CardComponent/LinkedCard'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'


export default function Card() {
  return (
    <SafeAreaView style={styles.safearea}>
      <LinkedCard/>

    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor:"white",
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0
  },
})