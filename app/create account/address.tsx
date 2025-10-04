import { 
    Image, 
    Platform, 
    SafeAreaView, 
    StatusBar, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    Alert, 
    ScrollView, 
    KeyboardAvoidingView 
  } from 'react-native'
  import React, { useState } from 'react'
  import CustomButton from '@/components/CustomButton/CustomButton'
  import { useRouter } from 'expo-router'
  import CustomInput from '@/components/CustomInput/CustomInput'
  
  export default function Address() {
    const [state, setState] = useState('')
    const [LGA, setLGA] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [streetName, setStreetName] = useState('')
  
    const router = useRouter()
  
    const goback = ()=>{
      router.back()
    }
  
    const handleNext = () => {
      if (!state || !LGA || !houseNumber || !streetName) {
        Alert.alert("Incomplete Details", "Please fill in all fields before continuing.")
        return
      }
      router.push('/create account/nationality')
    }
  
    return (
      <SafeAreaView style={styles.safearea}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
        >
         
          <View style={styles.page}>
            
            <ScrollView 
              contentContainerStyle={styles.scrollContent} 
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <TouchableOpacity onPress={goback}>
                <Image 
                  style={styles.back} 
                  source={require('../../assets/images/arrowBack.png')}
                />
              </TouchableOpacity>
  
              <View style={styles.titleContainer}>
                <Text style={styles.title}>What’s your Residential Address?</Text>
                <Text style={styles.description}>
                  Kindly provide your complete residential address
                </Text>
              </View>
  
              <CustomInput 
                label='State'
                placeholder='Select state'
                placeholderTextColor="#9A9A9A"
                value={state}
                onChangeText={setState}
              />
  
              <CustomInput 
                label='L.G.A'
                placeholder='Select L.G.A'
                placeholderTextColor="#9A9A9A"
                value={LGA}
                onChangeText={setLGA}
              />
  
              <CustomInput 
                label='House Number'
                placeholder='Input house number'
                placeholderTextColor="#9A9A9A"
                value={houseNumber}
                onChangeText={setHouseNumber}
              />
  
              <CustomInput 
                label='Street Name'
                placeholder='Input street name'
                placeholderTextColor="#9A9A9A"
                value={streetName}
                onChangeText={setStreetName}
              />
            </ScrollView>
  
          </View>
        </KeyboardAvoidingView>
            {/* Fixed button at bottom */}
            <View style={styles.footer}>
              <CustomButton title='Next' onPress={handleNext} />
            </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    safearea:{
      flex:1,
      backgroundColor: 'white',
      paddingTop:Platform.OS === 'android'? StatusBar.currentHeight:0
    },
    page:{
      flex:1,
      justifyContent: 'space-between',
      paddingHorizontal:16,
      paddingBottom:16
    },
    scrollContent:{
      paddingBottom:20
    },
    back:{
      width:20,
      height:40,
      marginTop:10
    },
    titleContainer:{
      marginTop:30,
      gap:20
    },
    title:{
      fontFamily: 'intersemibold',
      fontWeight: '600',
      fontSize:20,
      color: '#000000'
    },
    description:{
      fontFamily: 'interregular',
      fontSize: 18,
      color: '#000000',
      fontWeight:"400"
    },
    footer:{
        paddingHorizontal:16
     
    }
  })
  