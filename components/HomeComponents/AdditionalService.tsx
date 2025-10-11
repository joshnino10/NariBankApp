import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function AdditionalService() {
  const services = [
    {
      icon: require('../../assets/images/to nari icon.png'),
      text: 'To Nari',
      route: '/to nari/tonari',
    },
    {
      icon: require('../../assets/images/bank icon.png'),
      text: 'To Bank',
      route: '/to bank/bank'
    },
    {
      icon: require('../../assets/images/bills icon.png'),
      text: 'Bills',
      route: '/bills/bills',
    },
    {
      icon: require('../../assets/images/wallet icon.png'),
      text: 'Int’l Wallet',
      route: '/wallet/wallet',
    },
    {
      icon: require('../../assets/images/mobile icon.png'),
      text: 'Mobile Topup',
      route: '/mobile Topup/topup',
    },
    {
      icon: require('../../assets/images/sports icon.png'),
      text: 'Sports',
      route: '/sport/sports'
    },
    {
      icon: require('../../assets/images/tv icon.png'),
      text: 'TV',
      route: '/tv/tv'
    },
    {
      icon: require('../../assets/images/kolo icon.png'),
      text: 'Kolo',
      route: '/kolo/kolo',
    },
  ]

  const handleServicePress = (route: string) => {
    router.push(route as any)
  }

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceButton}
            onPress={() => handleServicePress(service.route)}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <Image 
                source={service.icon} 
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text numberOfLines={2} style={styles.serviceText}>{service.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.showAllButton}
        activeOpacity={0.7}
      >
        <Text style={styles.showAllText}>Show all</Text>
        <Feather name="chevron-down" size={24} color="#1830AC" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EBF8',
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  serviceButton: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#96A2E1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#1A35BDE5',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 0,
    elevation: 4,
  },
  icon: {
    width: 32,
    height: 32,
  },

  serviceText: {
    fontFamily: 'intermedium',
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 14,
  },

  showAllButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

  showAllText: {
    fontFamily: 'intersemibold',
    fontSize: 14,
    color: '#4f46e5',
    fontWeight: '600',
    marginRight: 6,
  },
})