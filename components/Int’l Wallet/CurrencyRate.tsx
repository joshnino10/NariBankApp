import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { currrencyData } from "./CurrencyData";
import Feather from '@expo/vector-icons/Feather';

export default function CurrencyRate() {
  return (
    <View style={styles.contents}>
      {/* Header */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Currency Rate</Text>

        <TouchableOpacity style={styles.swapbtn} activeOpacity={0.7}>
          <Text style={styles.swaptext}>Swap</Text>
          <Image
            style={styles.swapIcon}
            source={require("../../assets/images/swap-outline.png")}
          />
        </TouchableOpacity>
      </View>

      {/* List */}
      <View style={styles.listContainer}>
        {currrencyData.map((item) => (
          <TouchableOpacity style={styles.currencyItem} key={item.code} activeOpacity={0.7}>
            <View style={styles.row}>
              
              {/* Left */}
              <View style={styles.leftSection}>
                <Image style={styles.flag} source={item.Icon} />
                <Text style={styles.code}>{item.code}</Text>
              </View>

              {/* Right */}
              <View>
                <View style={styles.rateRow}>
                  <Image
                    style={styles.currencyIcon}
                    source={require('../../assets/images/currencyicon.png')}
                  />
                  <Text style={styles.exchangerate}>{item.ExchangeRate}</Text>
                </View>

                <View style={styles.trendRow}>
                  <Feather 
                    name={item.isPositive ? "arrow-up-right" : "arrow-down-right"}
                    size={20}
                    color={item.isPositive ? "green" : "red"} 
                  />
                  <Text style={styles.percentage}>{item.percentage}</Text>
                </View>
              </View>

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
    color: "#000",
  },
  swapbtn: {
    backgroundColor: "#1A35BD",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  swaptext: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  swapIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  listContainer: {
    marginTop: 15,
    borderRadius: 30,
  },
  currencyItem: {
    paddingHorizontal: 15,
    paddingVertical: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
  },
  flag: {
    width: 70,
    height: 52,
  },
  code: {
    fontFamily: "intersemibold",
    fontWeight: "600",
    color: "#000",
    fontSize: 16,
  },
  rateRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  currencyIcon: {
    width: 24,
    height: 24,
  },
  exchangerate: {
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "intermedium",
    color: "#000",
  },
  trendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginLeft: 7,
  },
  percentage: {
    fontSize: 14,
    fontWeight: "500",
  }
});
