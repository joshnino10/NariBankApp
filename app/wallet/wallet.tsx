import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import InternationalWallet from '@/components/Int’l Wallet/InternationalWallet'
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';

export default function Wallet() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <Animated.View
          entering={FadeInDown.duration(600)} 
          exiting={FadeOut.duration(200)}
           >
          <InternationalWallet/>
          

        </Animated.View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white'
  },

 
    
})