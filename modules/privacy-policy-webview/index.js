import { StyleSheet } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { WebView } from "react-native-webview";
import { OptionsContext } from "@options";

const PrivacyPolicyWebview = ({
  navigation,
  url
}) => {
  const [uri, setUri] = useState("");
  const options = useContext(OptionsContext);

  const handleUri = () => {
    if (options.url) {
      setUri(options.url);
    } else {
      setUri(url);
    }
  };

  useEffect(() => {
    handleUri();
  }, []);
  return <WebView source={{
    uri: uri
  }} />;
};

export default {
  title: "Privacy Policy WebView",
  navigator: PrivacyPolicyWebview
};

const _styles = StyleSheet.create({
  zdhcXmSR: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NMwoGwZA: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});