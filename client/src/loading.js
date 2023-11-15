import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator,
  SafeAreaView, ScrollView,  Image } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import {
  Layout, Section, SectionContent,
} from "react-native-rapi-ui";

import Background from './src/components/Background'
import Logo from './src/components/Logo'


// Loading
const ComponentsView = () => {
  return (
  <View>
    <Text>Hello, world!</Text>
  </View>
  )
}

const HelloWorldApp = () => {

  // API
  const [fetchedState,setFetchedState]=useState(null);
  const [usersData,setUsersData]=useState([]);

  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),3000);
  },[])
  
  const getData=async()=>{
    try{ //'https://jsonplaceholder.typicode.com/users'
      const response=await fetch('https://jsonplaceholder.typicode.com/users');
      const data=await response.json();
      setUsersData(data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setFetchedState(null);
    }
  }

 
 

return (
 
  
  <Layout >
      {
      fetchedState ? 

      <SafeAreaView style={styles.container}>
          
      
      

        <Text style={styles.loadingtext}>
          <Logo/>
          {"\n"}
          {"\n"}
          {"\n"}
          <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
          {"\n"}
          Loading Data
        </Text> 
        

        
        </SafeAreaView>


        :
        
      <ComponentsView />

    }
   </Layout>

  



  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 0,
    marginTop: 20,
    marginHorizontal: 1,
  },
  cardtext: {
    fontSize: 19,
    color: "#000"
  },
  loadingtext:{
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000",
  }, 
  spinner: {
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 100,
    padding: 0,
  }
});

export default HelloWorldApp;
