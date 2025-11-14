import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { currrencyData } from "./CurrencyData";

export default function CurrencyRate() {
  return (
    <View style={styles.contents}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Currency Rate</Text>

        <View>
          <TouchableOpacity style={styles.swapbtn}>
            <Text style={styles.swaptext}>Swap</Text>
            <Image
              style={{ width: 20, height: 20, marginLeft: 5 }}
              source={require("../../assets/images/swap-outline.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop:15, borderRadius:30}}>
        {currrencyData.map((item, index)=>(
          <TouchableOpacity style={styles.Currencies} key={index}>
            <View style={{flexDirection:'row', alignItems:'flex-end', gap:5}}>
              <Image style={styles.Flag} source={item.Icon}/>
              <Text style={styles.code}>{item.code}</Text>
            </View>

            <View>
                

            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "intersemibold",
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },

  swapbtn: {
    backgroundColor: "#1A35BD",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  swaptext: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  Currencies: {
    borderWidth: 1,

    paddingHorizontal: 15,
    paddingVertical: 18,
  },

  Flag: {
    width: 70,
    height: 52,
  },

  code:{
    fontFamily:'intersemibold',
    fontWeight:'600',
    color:'#000000',
    fontSize:16

  },
});
