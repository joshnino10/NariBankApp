import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AccountGenerated from '@/components/AccountCreated/AccountGenerated'

export default function accountcreated() {
  return (
    <SafeAreaView style={styles.safearea}>
        <View style={styles.page}>
            <View style={styles.container}>
              <Image style={styles.icon} source={require('../../assets/images/account success.png')}/>
              <Text style={styles.title}>You’ve successfully created an account !</Text>
            </View>
            <View>
                <AccountGenerated/>

            </View>

        </View>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === "android"? StatusBar.currentHeight:0

    },
    page:{
        paddingHorizontal:16

    },

    icon:{
        width:150,
        height:150,

    },

    container:{
        alignItems: 'center',
        marginTop:70,
        gap:50


    },

    title:{
        fontFamily: 'interregular',
        textAlign:'center',
        color: '#777777',
        fontSize: 18

    },

})