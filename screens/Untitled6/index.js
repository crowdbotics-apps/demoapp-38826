import { FlatList } from "react-native";
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
        

        <Text style={styles.qmGmlJxH}>Progress</Text>
        <View style={styles.VcibujGW}>
          <View style={styles.RpUMXqsD}>
            <ImageBackground style={styles.iHGtuXOg} source={require("./image (5).png")} resizeMode="cover"></ImageBackground>
          </View>
          <Text style={styles.ilzUzfrE}>Design Changes</Text>
          <Text style={styles.BGOLThty}>2 Days ago</Text>
        </View>
        <ImageBackground style={styles.GCQqlBHQ} source={require("./image (4).png")} resizeMode="cover"></ImageBackground>
        <ImageBackground style={styles.lZLVaXuS} source={require("./image (6).png")} resizeMode="cover"></ImageBackground>

        <FlatList style={styles.OggILIdb} renderItem={({
        item
      }) => <View style={styles.YGOcMDpY}><View style={styles.uObkPlbr}><ImageBackground style={styles.ZEWLztVO} source={require("./image (8).png")} resizeMode="cover"></ImageBackground></View><Text style={styles.rROeqKTM}>Project 1</Text><Text style={styles.UOStVBjF}>Front-End Development</Text><Text style={styles.DqTsXpgN}>October 20, 2020</Text></View>} ItemSeparatorComponent={() => <View style={styles.AmeLhVPD} />} data={[1, 2]} keyExtractor={(item, index) => index} horizontal={true}></FlatList>
      <View style={styles.ePTgMKgM}><ImageBackground style={styles.lfUsbIWc} source={require("./image (9).png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.aBFEfVuQ} source={require("./image (10).png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.erckjvKZ} source={require("./image (11).png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.SuhWvJqt} source={require("./image (19).png")} resizeMode="cover"></ImageBackground></View><View style={styles.GlgkOrRv}></View><View style={styles.xNwpUSgo}></View><View style={styles.gfTUdHGY}></View></ScrollView>
      <View style={styles.uyzRADLC}>
        <View style={styles.rEpcHCUm}>
          <ImageBackground style={styles.jwGClMez}></ImageBackground>
          <ImageBackground style={styles.YBhNylRC} source={require("./image (5).png")} resizeMode="cover"></ImageBackground>
        </View>
        <Text style={styles.dSevyrmK}>Design Changes</Text>
        <Text style={styles.SzxTmfec}>2 Days ago</Text>
      </View>
    <View style={styles.nLHodvSD}><ImageBackground style={styles.DHqKQOsm}></ImageBackground><ImageBackground style={styles.RAQJYelq}></ImageBackground><ImageBackground style={styles.eAQpzvZZ}></ImageBackground><ImageBackground style={styles.AFjUOwKF}></ImageBackground></View></SafeAreaView>;
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
    top: 58,
    left: -5
  },
  sFOSiYiY: {
    width: 123,
    height: 23,
    lineHeight: 20,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 88,
    left: 16,
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
    top: 124,
    left: 10
  },
  QSSFYXmu: {
    height: 37,
    width: 77,
    backgroundColor: "#dcdcd1",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 120,
    left: 100
  },
  ucbnkgRt: {
    height: 35,
    width: 79,
    backgroundColor: "#d3d2c8",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 118,
    left: 190
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
    height: 159,
    width: 183,
    backgroundColor: "#585757",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 476,
    left: 15
  },
  pYBJdGTl: {
    height: 139,
    width: 152,
    backgroundColor: "#747272",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    top: 179,
    left: 187
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
    top: 352,
    left: 10,
    color: "#5b5454"
  },
  VcibujGW: {
    height: 60,
    width: 287,
    backgroundColor: "#fffffa",
    borderRadius: 13,
    color: "#777777",
    position: "absolute",
    top: 383,
    left: 37
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
    top: 449,
    left: 39
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
  },
  jTGesjiV: {
    position: "absolute",
    width: 398,
    height: 172,
    left: 16,
    top: 156
  },
  OPpZPMME: {
    width: 290,
    height: 167,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top: 2,
    left: -105
  },
  IIkdbGSS: {
    backgroundColor: "#000000",
    height: 1
  },
  DNWhwiqi: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  jMctlAdk: {
    height: 47,
    width: 59,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 2,
    left: 293
  },
  dqGYQVQd: {
    width: 46,
    height: 44,
    position: "absolute",
    top: 75,
    left: -10
  },
  ygvnklel: {
    height: 46,
    width: 53,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 2,
    left: 2
  },
  JlnDqgLY: {
    width: 38,
    height: 39
  },
  GCQqlBHQ: {
    width: 35,
    height: 36,
    position: "absolute",
    top: 7,
    left: 309
  },
  lZLVaXuS: {
    width: 26,
    height: 29,
    position: "absolute",
    top: 10,
    left: 13
  },
  OoMWeMba: {
    position: "absolute",
    width: 342,
    height: 150,
    left: 2,
    top: 0
  },
  gnDofphY: {
    width: 153,
    height: 143,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "absolute",
    top: 3,
    left: -2
  },
  NRESckvH: {
    backgroundColor: "#000000",
    height: 1
  },
  Ztpgpljh: {
    width: 20,
    height: 1
  },
  OggILIdb: {
    position: "absolute",
    width: 346,
    height: 154,
    left: 9,
    top: 170
  },
  YGOcMDpY: {
    width: 161,
    height: 152,
    backgroundColor: "#383333",
    borderRadius: 12
  },
  AmeLhVPD: {
    width: 12,
    height: 1
  },
  EBAbNqoB: {
    width: 152,
    height: 132
  },
  uObkPlbr: {
    height: 36,
    width: 41,
    backgroundColor: "#7a7474",
    borderRadius: 8,
    color: "#777777",
    position: "absolute",
    top: 15,
    left: 17
  },
  rROeqKTM: {
    width: 62,
    height: 15,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 24,
    left: 67,
    color: "#fefefe",
    fontWeight: "700"
  },
  ZEWLztVO: {
    width: 33,
    height: 31,
    position: "absolute",
    top: 2,
    left: 4
  },
  UOStVBjF: {
    width: 100,
    height: 35,
    lineHeight: 19,
    fontSize: 14,
    borderRadius: 0,
    color: "#fafafa",
    fontWeight: "700",
    position: "absolute",
    top: 64,
    left: 17
  },
  DqTsXpgN: {
    width: 123,
    height: 19,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 127,
    left: 10,
    color: "#ffffff",
    fontWeight: "700"
  },
  ePTgMKgM: {
    height: 51,
    width: 357,
    backgroundColor: "#edebeb",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 515,
    left: 1
  },
  lfUsbIWc: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 14,
    left: 46
  },
  aBFEfVuQ: {
    width: 33,
    height: 32,
    position: "absolute",
    top: 13,
    left: 118
  },
  erckjvKZ: {
    width: 35,
    height: 31,
    position: "absolute",
    top: 14,
    left: 190
  },
  SuhWvJqt: {
    width: 35,
    height: 32,
    position: "absolute",
    top: 14,
    left: 257
  },
  tltIqlFn: {
    height: 51,
    width: 357,
    backgroundColor: "#edebeb",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 28.25445556640625,
    left: 1
  },
  HDwyjJGQ: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 14,
    left: 46
  },
  NtsAkGia: {
    width: 33,
    height: 32,
    position: "absolute",
    top: 13,
    left: 118
  },
  afbNFsva: {
    width: 35,
    height: 31,
    position: "absolute",
    top: 14,
    left: 190
  },
  VKVKicEa: {
    width: 35,
    height: 32,
    position: "absolute",
    top: 14,
    left: 257
  },
  mSAIfVVr: {
    height: 51,
    width: 357,
    backgroundColor: "#edebeb",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 28.25445556640625,
    left: 1
  },
  RqiPMDLs: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 14,
    left: 46
  },
  IkDtYPeM: {
    width: 33,
    height: 32,
    position: "absolute",
    top: 13,
    left: 118
  },
  gXIizrzU: {
    width: 35,
    height: 31,
    position: "absolute",
    top: 14,
    left: 190
  },
  crCbLmvL: {
    width: 35,
    height: 32,
    position: "absolute",
    top: 14,
    left: 257
  },
  CQKuniDf: {
    height: 51,
    width: 357,
    backgroundColor: "#edebeb",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 28.25445556640625,
    left: 1
  },
  LMarzgmG: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 14,
    left: 46
  },
  qbBdrnft: {
    width: 33,
    height: 32,
    position: "absolute",
    top: 13,
    left: 118
  },
  TDwnDKMp: {
    width: 35,
    height: 31,
    position: "absolute",
    top: 14,
    left: 190
  },
  hVXjdbBc: {
    width: 35,
    height: 32,
    position: "absolute",
    top: 14,
    left: 257
  },
  nLHodvSD: {
    height: 51,
    width: 357,
    backgroundColor: "#edebeb",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 576,
    left: 1
  },
  DHqKQOsm: {
    width: 33,
    height: 30,
    position: "absolute",
    top: 14,
    left: 46
  },
  RAQJYelq: {
    width: 33,
    height: 32,
    position: "absolute",
    top: 13,
    left: 118
  },
  eAQpzvZZ: {
    width: 35,
    height: 31,
    position: "absolute",
    top: 14,
    left: 190
  },
  AFjUOwKF: {
    width: 35,
    height: 32,
    position: "absolute",
    top: 14,
    left: 257
  },
  HtUYOjsd: {
    width: 40,
    height: 10,
    position: "absolute",
    top: 333,
    left: 123
  },
  GlgkOrRv: {
    height: 8,
    width: 27,
    backgroundColor: "#2a2828",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 331,
    left: 152
  },
  xNwpUSgo: {
    height: 11,
    width: 10,
    backgroundColor: "#0a0909",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 330,
    left: 196
  },
  gfTUdHGY: {
    height: 9,
    width: 10,
    backgroundColor: "#0a0909",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 331,
    left: 182
  }
});
export default Untitled6;