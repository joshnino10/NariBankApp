import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, } from "react-native";

export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#1A35BD", 
        tabBarInactiveTintColor: "#9A9A9A", 

        tabBarStyle: {
          backgroundColor: "#E8EBF8",
          borderTopWidth: 0.5,
          justifyContent:'center',
          alignItems:'center',
          borderTopColor: "#E5E7EB",
          height: Platform.OS === 'ios'? 80:60,
          paddingTop: Platform.OS === 'ios'? 5:3,
          paddingBottom:5
        },

        tabBarIconStyle:{
            justifyContent:'center',
            alignItems:'center'

        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "interregular",
          fontWeight:"400"
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/homeActiveIcon.png")
                  : require("../../assets/images/homeInActiveIcon.png")
                
              }
              style={{width:24, height:24}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Card",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/cardaActiveIcon.png")
                  : require("../../assets/images/cardInActiveIcon.png")
              }
              style={{width:24, height:24}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/supportActiveIcon.png")
                  : require("../../assets/images/supportInActiveIcon.png")
              }
              style={{width:24, height:24}}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/profileActiveIcon.png")
                  : require("../../assets/images/profileInactiveIcon.png")
              }
              style={{width:24, height:24}}
            />
          ),
        }}
      />
    </Tabs>
  );
}
