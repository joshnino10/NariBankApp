import CustomHeader from '@/components/CustomHeader/CustomHeader'
import { Stack } from 'expo-router'
import React from 'react'
import { Platform, SafeAreaView, StatusBar, View } from 'react-native'

const SafeHeader = ({title}: {title:string}) =>(
    <SafeAreaView 
    style={{
        paddingTop:Platform.OS === "android"? StatusBar.currentHeight:0,
        backgroundColor:'white',
        paddingHorizontal:16

    }}>
        <View >
            <CustomHeader title={title}/>

        </View>


    </SafeAreaView>
)


export default function Narilayout() {
  return (
    <Stack>

        <Stack.Screen name='index' options={{
            header: ()=> <SafeHeader title='Transfer to Nari'/>
        }}/>


        <Stack.Screen name='nair'
        options={{
            header:()=> <SafeHeader title='Transfer to Nari'/>
        }}
          />
      
    </Stack>
  )
}

