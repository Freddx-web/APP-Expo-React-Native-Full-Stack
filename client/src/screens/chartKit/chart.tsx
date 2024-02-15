import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar, View, Text
} from 'react-native';
  //
  import CountryFlag from "react-native-country-flag";

  export const pieData = [
    {
      value: 47,
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
      focused: true,
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#ff5722', gradientCenterColor: '#ff5722'},
    {value: 3, color: '#ffeb3b91', gradientCenterColor: '#ffeb3b91'},
  ];
  
  //
  export const renderDot = color => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  export const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20
            }}>
            {renderDot('#009FFF')/** #006DFF */} 
            <Text style={{color: 'white'}}>USD: 47%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#ff5722')}
            <Text style={{color: 'white'}}>Okay: 16%</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20,
            }}>
            {renderDot('#3BE9DE')}
            <Text style={{color: 'white'}}>EUR: 40%</Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 120}}>
            {renderDot('#ffeb3bd9')}
            <Text style={{color: 'white'}}>Poor: 3%</Text>
          </View>
        </View>
      </>
    );
  };
