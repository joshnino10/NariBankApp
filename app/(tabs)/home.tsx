import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/HomeComponents/HomeHeader'
import AccountBalance from '@/components/HomeComponents/AccountBalance'

export default function Home() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <AccountBalance/>

      </ScrollView>
    
     


      
     
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