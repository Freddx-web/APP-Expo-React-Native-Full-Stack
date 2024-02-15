import React, { useEffect, useState } from "react";
import { Button, RefreshControl, StatusBar,
  SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, Stack, View } from "@react-native-material/core";
import { Divider } from '@rneui/themed';
import { Avatar, Card } from 'react-native-paper';

// Style 
import Styles_Tab3 from '../../../../css/Styles.ViewTab4';

// Componets
import TitleH1 from '../../../../components/TitleH1'
import CoinItem from './CoinItem'

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
    <SafeAreaView style={Styles_Tab3.container}>
      <TitleH1> Criptos  </TitleH1>
      <Divider styles={{padding: 10 }} />
      <Card>
        <FlatList
          style={Styles_Tab3.list}
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

export default ViewCripts; 