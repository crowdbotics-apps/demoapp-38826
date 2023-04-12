import { ImageBackground } from "react-native";
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
        <View style={styles.pYBJdGTl}><View style={styles.CcvaYfiI}></View><Text style={styles.OwnbsEbC}>Project 2</Text><Text style={styles.AwQnYCtN}>Front-End
Development</Text><Text style={styles.OSjukWhu}>April  10, 2023</Text></View>
      <Text style={styles.qmGmlJxH}>Progress</Text><View style={styles.VcibujGW}><View style={styles.RpUMXqsD}><ImageBackground style={styles.iHGtuXOg} source={require("./image (5).png")} resizeMode="cover"></ImageBackground></View><Text style={styles.ilzUzfrE}>Design Changes</Text><Text style={styles.BGOLThty}>2 Days ago</Text></View><ImageBackground style={styles.vEPMqSeO} source={require("./image (4).png")} resizeMode="cover"></ImageBackground></ScrollView>
    <View style={styles.uyzRADLC}><View style={styles.rEpcHCUm}><ImageBackground style={styles.jwGClMez}></ImageBackground><ImageBackground style={styles.YBhNylRC} source={require("./image (5).png")} resizeMode="cover"></ImageBackground></View><Text style={styles.dSevyrmK}>Design Changes</Text><Text style={styles.SzxTmfec}>2 Days ago</Text></View></SafeAreaView>;
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
    top: 51,
    left: -5
  },
  sFOSiYiY: {
    width: 123,
    height: 23,
    lineHeight: 20,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 78,
    left: 15,
    fontWeight: "100",
    color: "#473a3a"
  },
  yKokNmEo: {
    height: 34,
    width: 80,
    backgroundColor: "#fafaf2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 110,
    left: 11
  },
  QSSFYXmu: {
    height: 37,
    width: 77,
    backgroundColor: "#dcdcd1",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 109,
    left: 100
  },
  ucbnkgRt: {
    height: 35,
    width: 79,
    backgroundColor: "#d3d2c8",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 109,
    left: 187
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
    top: 160,
    left: 16
  },
  pYBJdGTl: {
    height: 161,
    width: 171,
    backgroundColor: "#747272",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 160,
    left: 199
  },
  MWfuaqfk: {
    height: 28,
    width: 39,
    backgroundColor: "#E4E4E4",
    borderRadius: 3,
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
    lineHeight: 17,
    fontSize: 16,
    borderRadius: 0,
    color: "#fffffd",
    position: "absolute",
    top: 72,
    left: 15,
    letterSpacing: 3,
    fontWeight: "700"
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
  },
  CcvaYfiI: {
    height: 30,
    width: 43,
    backgroundColor: "#E4E4E4",
    borderRadius: 3,
    color: "#777777",
    position: "absolute",
    top: 19,
    left: 16
  },
  OwnbsEbC: {
    width: 62,
    height: 18,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#fdfdfd",
    position: "absolute",
    top: 27,
    left: 69
  },
  AwQnYCtN: {
    width: 124,
    height: 41,
    lineHeight: 19,
    fontSize: 16,
    borderRadius: 0,
    color: "#fdfdfd",
    opacity: 1,
    position: "absolute",
    top: 68,
    left: 13,
    textAlign: "left",
    fontWeight: "700",
    letterSpacing: 2
  },
  fzfxPgUa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  OSjukWhu: {
    width: 121,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    letterSpacing: 1,
    color: "#fbfbfb",
    position: "absolute",
    top: 137,
    left: 11
  },
  qmGmlJxH: {
    width: 91,
    height: 24,
    lineHeight: 19,
    fontSize: 19,
    borderRadius: 0,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
    top: 347,
    left: 12,
    color: "#5b5454"
  },
  VcibujGW: {
    height: 60,
    width: 287,
    backgroundColor: "#fffffa",
    borderRadius: 13,
    color: "#777777",
    position: "absolute",
    top: 378,
    left: 40
  },
  HQstRfLH: {
    height: 60,
    width: 288,
    backgroundColor: "#fefefb",
    borderRadius: 13,
    color: "#777777",
    position: "absolute",
    top: 448,
    left: 38
  },
  RpUMXqsD: {
    height: 33,
    width: 34,
    backgroundColor: "#141313",
    borderRadius: 5,
    color: "#777777",
    position: "absolute",
    top: 13,
    left: 12
  },
  ilzUzfrE: {
    width: 107,
    height: 16,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 55
  },
  BGOLThty: {
    width: 65,
    height: 10,
    lineHeight: 12,
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "200",
    position: "absolute",
    top: 32,
    left: 55,
    color: "#696464"
  },
  GgWRTYre: {
    height: 35,
    width: 34,
    backgroundColor: "#383434",
    borderRadius: 5,
    color: "#777777",
    position: "absolute",
    top: 13,
    left: 14
  },
  cQMCxqLA: {
    width: 106,
    height: 13,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 17,
    left: 54
  },
  FRwIyXVN: {
    width: 66,
    height: 14,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "200",
    color: "#7b7575",
    position: "absolute",
    top: 33,
    left: 53
  },
  vEPMqSeO: {
    width: 31,
    height: 36,
    position: "absolute",
    top: 3,
    left: 319
  },
  StHKUJpU: {
    width: 42,
    height: 30
  },
  iHGtuXOg: {
    width: 23,
    height: 24,
    position: "absolute",
    top: 4,
    left: 5
  },
  uyzRADLC: {
    height: 60,
    width: 284,
    backgroundColor: "#fffffa",
    borderRadius: 13,
    color: "#777777",
    position: "absolute",
    top: 443,
    left: 41
  },
  rEpcHCUm: {
    height: 33,
    width: 34,
    backgroundColor: "#141313",
    borderRadius: 5,
    color: "#777777",
    position: "absolute",
    top: 13,
    left: 12
  },
  jwGClMez: {
    width: 32,
    height: 27,
    position: "absolute",
    top: 3,
    left: 1
  },
  dSevyrmK: {
    width: 107,
    height: 16,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 55
  },
  SzxTmfec: {
    width: 65,
    height: 10,
    lineHeight: 12,
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "200",
    position: "absolute",
    top: 32,
    left: 55,
    color: "#696464"
  },
  clzxuOCi: {
    height: 60,
    width: 287,
    backgroundColor: "#fffffa",
    borderRadius: 13,
    color: "#777777",
    position: "absolute",
    top: 456,
    left: 45
  },
  qTmEVVvc: {
    height: 33,
    width: 34,
    backgroundColor: "#141313",
    borderRadius: 5,
    color: "#777777",
    position: "absolute",
    top: 13,
    left: 12
  },
  MoLGBwnz: {
    width: 32,
    height: 27,
    position: "absolute",
    top: 3,
    left: 1
  },
  YdfktApA: {
    width: 107,
    height: 16,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 16,
    left: 55
  },
  bvPurxXP: {
    width: 65,
    height: 10,
    lineHeight: 12,
    fontSize: 12,
    borderRadius: 0,
    fontWeight: "200",
    position: "absolute",
    top: 32,
    left: 55,
    color: "#696464"
  },
  GoCZpKvx: {
    width: 91,
    height: 24,
    lineHeight: 19,
    fontSize: 19,
    borderRadius: 0,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
    top: 32.33489990234375,
    left: 12,
    color: "#5b5454"
  },
  YBhNylRC: {
    width: 23,
    height: 22,
    position: "absolute",
    top: 6,
    left: 5
  },
  gtuqfIdt: {
    position: "absolute",
    width: 356,
    height: 180,
    left: -7,
    top: 161
  },
  sParxCLi: {
    width: 188,
    height: 261,
    backgroundColor: "#FFFFFF"
  },
  ovMWnrMA: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled6;