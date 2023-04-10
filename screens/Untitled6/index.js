import { CheckBox } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { Switch } from "react-native";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.lwwmLsDk}></TextInput><FlatList style={styles.kCqpnaqV} renderItem={({
        item
      }) => <View style={styles.jdatPYuu}></View>} ItemSeparatorComponent={() => <View style={styles.HEEzaLKM} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><ActivityIndicator style={styles.pTXkHTZR}></ActivityIndicator><Switch style={styles.wNYywrsk}></Switch><Slider style={styles.WcbptZXY} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><RadioGroup style={styles.LhTTsXlV} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup><CheckBox style={styles.WsdehQtS} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  lwwmLsDk: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  kCqpnaqV: {
    position: "relative",
    width: 100,
    height: 150,
    left: 258,
    top: 0,
    alignItems: "center",
    flexWrap: "no-wrap"
  },
  jdatPYuu: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  HEEzaLKM: {
    backgroundColor: "#000000",
    height: 1
  },
  vufpaHrw: {
    flex: 1
  },
  EBzEIgZI: {
    flex: 1
  },
  HrkXhpVt: {
    flex: 1
  },
  sZeTcWtG: {
    flex: 1
  },
  TMCYvHHT: {
    flex: 1
  },
  lpgQqRNx: {
    flex: 1
  },
  pTXkHTZR: {
    width: 50,
    height: 50
  },
  wNYywrsk: {
    width: 50,
    height: 25
  },
  WcbptZXY: {
    width: 150,
    height: 40,
    position: "absolute",
    top: 267,
    left: 0
  },
  LhTTsXlV: {
    width: 120,
    height: 70
  },
  WsdehQtS: {
    width: 183,
    height: 69
  }
});
export default Untitled6;