import React from "react";
import { View,  StyleSheet, Image, Text } from "react-native";
import { Avatar, Card } from 'react-native-paper';

//style={styles.textSymbol}
import TitleCoin from './CoinTitle.js';

const CoinItem = ({ coin }) => (
 <View style={styles.containerItem}>
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        
        <Text>{coin.market_cap_rank}. {coin.name}</Text>
        <Text >{coin.symbol}</Text>
      </View>
    </View>
    <View style={styles.coinName}>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <Text
        style={[
          styles.pricePercentage,
          coin.price_change_percentage_24h > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
        {"\n"}
        {"\n"}

      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    //backgroundColor: "#121212",
    //paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
    margin:5
  },
  text: {
    //color: "#fff",
  },
  textPrice: {
    //color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  }
});

export default CoinItem;
