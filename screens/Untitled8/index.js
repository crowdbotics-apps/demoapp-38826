import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.digukhtq}></View><View style={styles.bPiIqTmO}></View><View style={styles.evnGuPQL}></View><Text style={styles.qfbcajrY}>Welcome Back</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  digukhtq: {
    height: 60,
    width: 140,
    backgroundColor: "#8dcb8a",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 104,
    top: 460,
    borderColor: "#05682d",
    transform: [{
      rotate: "0deg"
    }]
  },
  bPiIqTmO: {
    height: 60,
    width: 140,
    backgroundColor: "#abcaf2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 320,
    left: 103,
    alignItems: "end",
    justifyContent: "flex-end",
    borderColor: "#b94343"
  },
  evnGuPQL: {
    height: 60,
    width: 140,
    backgroundColor: "#d89d9d",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 390,
    left: 103,
    borderColor: "#a31717"
  },
  HQRTJJjb: {
    width: 97,
    height: 34,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  qfbcajrY: {
    width: 342,
    height: 95,
    lineHeight: 99,
    fontSize: 25,
    borderRadius: 0,
    fontFamily: "Montserrat",
    fontWeight: "500",
    letterSpacing: 3,
    textAlign: "center"
  }
});
export default Untitled8;