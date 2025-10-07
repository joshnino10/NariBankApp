import { router } from 'expo-router'
import React from 'react'
import { Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ProfileHeader() {
    const goBack = ()=> {
        router.push('/(tabs)/home')
    }

    const AccountName = 'PETER SWIFT'
  return (
    <SafeAreaView style={styles.safearea}>
        <View style={styles.content}>
         <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Image style={styles.icon} source={require('../../assets/images/arrowBackWhite.png')}/>
            </TouchableOpacity>
            <Text style={styles.profileText}>Profile</Text>
            <View style={styles.icon}/>
         </View>

         <View style={styles.ProfileImageContainer}>
            <View style={styles.imageCircle}>
                <TouchableOpacity>
                  <Image style={styles.profileImage}
                  source={require('../../assets/images/bigProfileImage.png')}
                  />
                </TouchableOpacity>
            </View>

            <Text style={styles.AccountName}>{AccountName}</Text>
            <Pressable>
              <Text style={styles.ShowDetails}>Show Details</Text>
            </Pressable>

         </View>



        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        backgroundColor: '#1A35BD',
        paddingHorizontal:16,
        paddingTop: Platform.OS === "android" ? 10 : 0


    },
    content:{
        paddingHorizontal:16,
        marginBottom: 20
        
    },
    icon:{
        width:20,
        height:40

    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 30

    },
    profileText:{
        fontFamily:'intersemibold',
        color: '#FFFFFF',
        fontSize:20,

    },
    imageCircle:{
        width:120,
        height:120,
        borderColor: '#E8EBF8',
        borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10000

    },
    ProfileImageContainer:{
        alignSelf: 'center'

    },
    profileImage:{
        width:100,
        height:100

    },
    AccountName:{
        marginTop:10,
        fontFamily: 'interBold',
        fontWeight: '700',
        fontSize:20,
        textAlign:'center',
        color: '#FFFFFF'

    },
    ShowDetails:{
        marginTop:15,
        fontFamily: 'interBold',
        fontWeight: '700',
        fontSize:16,
        textAlign:'center',
        color: '#FFFFFF'


    },
    
})