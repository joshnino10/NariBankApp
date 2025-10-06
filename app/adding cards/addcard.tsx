import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddingCard from '@/components/CardComponent/AddingCard'

export default function Addcard() {
  return (
    <SafeAreaView style={styles.safearea}>
        <AddingCard/>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop:Platform.OS === "android"? StatusBar.currentHeight:0

    },

})