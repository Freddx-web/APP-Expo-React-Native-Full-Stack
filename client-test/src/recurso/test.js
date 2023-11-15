/**
 * 
 */
// import React in our code
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Divider } from '@rneui/themed';
import VarChart from './src/components/charts-js/charts-grafica.js';

import MyBezierLineChart  from './src/animated_charts.js'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/*********************/}
        <Text style={styles.text}>Hello World!</Text>
        <View  style={styles.view}>


          <VarChart />  
          <Divider />
          <MyBezierLineChart />





        </View>
        {/*********************/}
      </ScrollView>
    </SafeAreaView>








  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    
  },
  scrollView: {
    flex: 1,
  },
  view:{
    paddingTop: 100
  },
  text: {
    paddingTop: 100
  }
});


