import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton/CustomButton'

export default function Login() {
  return (
    <SafeAreaView style={styles.SafeArea}>
    
     <View style={styles.page}>
        <View>
          <View style={styles.logoContainer}>
             <Image style={styles.logo} source={require('../../assets/images/small logo.png')}/>
            <Text style={styles.logoText}>Nari</Text>

        </View>



    </View>
        <View>
            <CustomButton title='Next'/>
        </View>

     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'white',
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight:0
    },
    page:{
        flex:1,
        justifyContent: 'space-between',
        paddingHorizontal:16
      

    },

    logoContainer:{
        marginTop: 10,
        alignItems: "center",
        justifyContent:'center',
        flexDirection: 'row',
    },

    logo:{
        width:40,
       height:40
    },

    logoText:{
        fontFamily: 'ArchivoBlack',
        fontSize:20,
        color: '#1A35BD',
        fontWeight: 400,

    },

})