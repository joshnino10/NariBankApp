import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SmallButton from '../CustomButton/SmallButton'

export default function LinkedCard() {
    const router = useRouter()

    const gotoAddCards = ()=> {
        router.push('/adding cards/addcard')

    }
  return (
    <View style={styles.container}>
        <View style={styles.cardsContainer}>
            <Image 
              style={styles.cardImage} 
              resizeMode='contain'  
              source={require('../../assets/images/visacard1.png')}
            />
            <Image 
              style={styles.cardImage} 
              resizeMode='contain'  
              source={require('../../assets/images/visacard2.png')}
            />
        </View>
        <View style={styles.btnContainer}>
            <SmallButton  
            onPress={gotoAddCards}
            textStyle={{
                fontFamily: 'intersemibold',
                fontWeight: '600',
                fontSize:20     
            }}
              title='+ Add card'
           
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 16
    },
    cardsContainer: {
        alignSelf: 'center',
        gap: 20
    },
    cardImage: {
        width: 380,
        height: 200
    },
    btnContainer: {
        alignSelf: 'center',
        marginTop: 25
    },
  
})