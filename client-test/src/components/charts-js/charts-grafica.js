/**
 * note : https://gifted-charts.web.app/
 */
// import React in our code
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import all the components we are going to use
import {

  Text,
  View,
  StyleSheet

} from 'react-native';

import { BarChart } from "react-native-gifted-charts";

const VarChart = () => {

  const barData = [
    {value: 230,label: 'Jan',frontColor: '#4ABFF4'},
    {value: 280,label: 'Feb',frontColor: '#79C3DB'},
    {value: 195,label: 'Mar',frontColor: '#28B2B3'},
    {value: 250,label: 'Apr',frontColor: '#4ADDBA'},
    {value: 320,label: 'May',frontColor: '#91E3E3'},
    ];

  return (
    
      <BarChart
        showFractionalValue
        showYAxisIndices
        noOfSections={4}
        maxValue={400}
        data={barData}
        isAnimated
      />
    
  );

}

export default VarChart;




