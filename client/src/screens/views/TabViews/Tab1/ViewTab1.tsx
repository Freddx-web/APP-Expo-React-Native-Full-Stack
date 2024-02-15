import React, { useContext } from 'react';
import { SafeAreaView,ScrollView,StatusBar, View } from 'react-native';
import { Text, Stack } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from "react-native-gifted-charts";
///import { pieData, renderDot, renderLegendComponent } from "../../../chartKit/chart.js"
import CountryFlag from "react-native-country-flag";
import { FAB, Portal, PaperProvider, AnimatedFAB } from 'react-native-paper';
import { Divider, useTheme } from '@rneui/themed';

// Styles 
import Styles_Tab1 from '../../../../css/Styles.ViewTab1'

const TabMarket = () => {

  const { theme } = useTheme();  

  return( 
    <SafeAreaView style={Styles_Tab1.container}>
      <ScrollView style={Styles_Tab1.scrollView}>
        {/****************************************/}
        <Text style={Styles_Tab1.subHeader}>Mercado</Text>
        <View style={Styles_Tab1.horizontal}>
          <Text style={Styles_Tab1.horizontalText}>Horizontal Divider</Text>
          <Divider />
          <Text style={Styles_Tab1.horizontalText}>
            Horizontal Divider with width and color
          </Text>
        </View>
        {/****************************************/}
        <Text style={Styles_Tab1.subHeader}>Horizontal Divider with Inset</Text>
        <View style={Styles_Tab1.horizontal}>
          <Text style={Styles_Tab1.horizontalText}>
            Horizontal Divider with left inset
          </Text>
          <Divider inset={true} />
          <Text style={Styles_Tab1.horizontalText}>
            Horizontal Divider with right inset
          </Text>
          <Divider inset={true} insetType="right" />
          <Text style={Styles_Tab1.horizontalText}>
            Horizontal Divider with middle inset
          </Text>
          <Divider inset={true} insetType="middle" />
          <Text style={Styles_Tab1.horizontalText}>Welcome to RNE App</Text>
        </View>

        {/****************************************/}
        <Text style={Styles_Tab1.subHeader}>Vertical Dividers</Text>
        <View style={Styles_Tab1.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" />
          <Text>Right text</Text>
        </View>
        <View style={Styles_Tab1.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" width={5} />
          <Text>Right text</Text>
        </View>
        {/****************************************/}
        <Text style={Styles_Tab1.subHeader}>Dividers with SubHeader</Text>
        <View style={Styles_Tab1.horizontal}>
          <Text style={Styles_Tab1.horizontalText}>Left text</Text>
          <Divider
            subHeader="Divider"
            inset={true}
            subHeaderStyle={{ color: theme?.colors?.primary }}
          />
          <Text style={Styles_Tab1.horizontalText}>Right text</Text>
        </View>
        {/****************************************/}
      </ScrollView>
    </SafeAreaView>
  )
}

export default TabMarket;