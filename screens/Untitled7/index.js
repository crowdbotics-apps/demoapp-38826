import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = ({
  route
}) => {
  const {
    united7
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><Text style={styles.UFHfuogF}>Lorem ipsum…bbbcxbxcbxhrn</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UFHfuogF: {
    width: 109,
    height: 70,
    lineHeight: 19,
    fontSize: 13,
    borderRadius: 0,
    fontWeight: "100",
    letterSpacing: 2,
    textAlign: "right",
    fontFamily: "Crimson Text",
    position: "relative",
    top: 299,
    left: 8,
    transform: [{
      rotate: "9deg"
    }],
    opacity: 1,
    color: "#db2626"
  }
});
export default Untitled7;