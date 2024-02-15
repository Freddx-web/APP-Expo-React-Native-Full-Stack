import React, { useEffect, useState } from "react";
import { Button, View, RefreshControl, StatusBar,
  SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import { TextInput, Text } from 'react-native-rapi-ui';
import Divider from 'react-native-divider';
import { Avatar, Card, } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CoinItem from '../CoinItem';

const ApiCardCript = () => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  //========================================================//
  // API 
  //========================================================//
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

  return (
    <View>
      <TextInput
          style={styles.searchInput}
          placeholder="Search Cripto"
          leftContent={
            <Ionicons name="search" size={20} color={'#ddd'} />
          }
          onChangeText={(text) => text && setSearch(text)}
        />
      <Divider />
      <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content style={styles.cardContent}>
        {
          fetchedState ? 
          <Text style={styles.loadingtext}>
            <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
            Loading Data...
          </Text> 
          
          :
              usersData.map(_api=>

                <Text style={styles.cardtext}  key={_api.id}>
                id:{_api.id}{"\n"}
                Name: {_api.products}{"\n"}
                Email:{_api.email}
                {"\n"}

          </Text> ) 
        }
        </Card.Content>
      </Card> 
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      flex: 1,
      marginTop: 30,
      marginHorizontal: 1,
    },
    cardtext: {
      fontSize: 19,
      color: "#000"
    },
    title: {
      fontSize: 20,
      color: "#fff",
      marginTop: 10,
    },
    searchInput: {
      padding:10  },
  });

export default ApiCardCript;
