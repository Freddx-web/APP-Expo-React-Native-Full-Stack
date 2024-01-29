
import React, { useEffect, useState } from "react";
import { Button, RefreshControl, StatusBar,
  SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, View } from "@react-native-material/core";
import { Divider } from '@rneui/themed';
import { Avatar, Card } from 'react-native-paper';

import CoinItem from '../TabViews/CoinItem.js'

const ViewCripts = () => {

  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };
   
  useEffect(() => {
    loadData();
  }, []);

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


  return(
    <SafeAreaView style={styles.container}>



      <Text h1> Criptos  </Text>

      <Divider />
      
      <Card>
      <FlatList
          style={styles.list}
          data={coins.filter(
            (coin) =>
              coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
              coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CoinItem coin={item} />}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await loadData();
            setRefreshing(false);
          }}
        />
</Card>

    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10
  },
  scrollView: {
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    flex: 1,
    marginTop: 30,
    marginHorizontal: 1,
  },
  text: {
    fontSize: 16,
  },
  list: {
    width: "100%",
    height: "90%",
    marginTop: 10,
    padding: 10
  },
});

export default ViewCripts; 