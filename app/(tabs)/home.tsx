import AccountBalance from '@/components/HomeComponents/AccountBalance'
import AdditionalService from '@/components/HomeComponents/AdditionalService'
import SportDeals from '@/components/HomeComponents/SportDeals'
import Transaction from '@/components/TransactionDetails/Transaction'
import React from 'react'
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, } from 'react-native'

export default function Home() {
  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView>
        <AccountBalance/>
        <Transaction/>
        <AdditionalService/>
        <SportDeals/>

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