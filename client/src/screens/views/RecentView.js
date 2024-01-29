import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar, View
} from 'react-native';
import { Text, Stack } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from "react-native-gifted-charts";
import { pieData, renderDot, renderLegendComponent } from "../chartKit/chart.js"
import CountryFlag from "react-native-country-flag";
import { FAB, Divider } from 'react-native-paper';

const RecentView = () => {

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>  
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            }) }
            

          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.view}>  
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.view}>  
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <Divider style={styles.divider} />
        <View style={styles.view}>  
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    view:{
      flex: 1,
      paddingVertical:100,
      backgroundColor: '#fff',
      borderRadius: 5,
    },
    scrollView: {
      marginHorizontal: 10,
    },
    background: {
      margin: 20,
      padding: 16,
      borderRadius: 20,
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
    divider:{
      margin: 16,
    },
    text: {
      fontSize: 16,
    },
  });

export default RecentView;