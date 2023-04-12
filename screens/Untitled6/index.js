import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.sOJGqmni}>
        <Text style={styles.QRubqGsk}>Hello Rohan !</Text>
        <Text style={styles.sFOSiYiY}>Have a nice day.</Text>
        <View style={styles.yKokNmEo}>
          <Text style={styles.qKDLNVsU}>My-Tasks</Text>
        </View>
        <View style={styles.QSSFYXmu}>
          <Text style={styles.VQJHHpdx}>In-progress</Text>
        </View>
        <View style={styles.ucbnkgRt}>
          <Text style={styles.SJucnYrB}>Completed</Text>
        </View>
        <View style={styles.kLivLWPH}>
          <View style={styles.MWfuaqfk}></View>
          <Text style={styles.fXTFmiqE}>Project 1</Text>
          <Text style={styles.GygeDsOS}>Front-End Development</Text>
          <Text style={styles.OjKVCzaX}>April 12, 2023</Text>
        </View>
        <View style={styles.pYBJdGTl}></View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  tCYdYzmz: {
    position: "absolute",
    width: 100,
    height: 150
  },
  sxVNYIAR: {
    width: 92,
    height: 225,
    backgroundColor: "#FFFFFF"
  },
  jniczbrd: {
    backgroundColor: "#000000",
    height: 1
  },
  XjuVIQvi: {
    width: 120,
    height: 70
  },
  qbvAMgnt: {
    position: "absolute",
    width: 100,
    height: 150
  },
  JvhfbttB: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 40
  },
  pbqkiROH: {
    backgroundColor: "#000000",
    height: 1
  },
  QRubqGsk: {
    width: 179,
    height: 39,
    lineHeight: 40,
    fontSize: 24,
    borderRadius: 0,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
    top: 26,
    left: -4
  },
  sFOSiYiY: {
    width: 123,
    height: 23,
    lineHeight: 20,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 60,
    left: 16,
    fontWeight: "100",
    color: "#473a3a"
  },
  yKokNmEo: {
    height: 36,
    width: 80,
    backgroundColor: "#fafaf2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 93,
    left: 9
  },
  QSSFYXmu: {
    height: 37,
    width: 77,
    backgroundColor: "#dcdcd1",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 93,
    left: 101
  },
  ucbnkgRt: {
    height: 35,
    width: 79,
    backgroundColor: "#d3d2c8",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 95,
    left: 194
  },
  qKDLNVsU: {
    width: 72,
    height: 18,
    lineHeight: 14,
    fontSize: 10,
    borderRadius: 0,
    fontWeight: "200",
    textAlign: "center",
    position: "absolute",
    top: 10,
    left: 4
  },
  sOJGqmni: {
    backgroundColor: "#f4ecec"
  },
  VQJHHpdx: {
    width: 65,
    height: 19,
    lineHeight: 14,
    fontSize: 10,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 12,
    left: 6
  },
  SJucnYrB: {
    width: 70,
    height: 15,
    lineHeight: 14,
    fontSize: 10,
    borderRadius: 0,
    fontWeight: "200",
    position: "absolute",
    top: 11,
    left: 15
  },
  kLivLWPH: {
    height: 163,
    width: 174,
    backgroundColor: "#585757",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 148,
    left: 16
  },
  pYBJdGTl: {
    height: 161,
    width: 171,
    backgroundColor: "#747272",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 148,
    left: 199
  },
  MWfuaqfk: {
    height: 28,
    width: 39,
    backgroundColor: "#E4E4E4",
    borderRadius: 2,
    color: "#777777",
    position: "absolute",
    top: 19,
    left: 21
  },
  fXTFmiqE: {
    width: 62,
    height: 20,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#fffff7",
    position: "absolute",
    top: 25,
    left: 66
  },
  GygeDsOS: {
    width: 128,
    height: 37,
    lineHeight: 14,
    fontSize: 21,
    borderRadius: 0,
    color: "#fffffd",
    position: "absolute",
    top: 72,
    left: 15
  },
  OjKVCzaX: {
    width: 100,
    height: 16,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#fdfdfd",
    position: "absolute",
    top: 139,
    left: 17,
    letterSpacing: 1
  }
});
export default Untitled6;