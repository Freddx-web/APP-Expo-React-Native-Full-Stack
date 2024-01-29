import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Text } from 'react-native-rapi-ui';

const TitleCoin = () => {
  return (
    <View style={styles.containerNames}>
      <Text>{coin.name}</Text>
      <Text style={styles.textSymbol}>{coin.symbol}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  containerNames: {
    marginLeft: 10,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default TitleCoin;