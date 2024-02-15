import React, { useContext } from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar, View } from 'react-native';
import { Text, Stack } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
import CountryFlag from "react-native-country-flag";
import { FAB, Portal, PaperProvider, AnimatedFAB } from 'react-native-paper';
import { useTheme } from '@rneui/themed';
import { Divider } from 'react-native-paper';
// Styles 
import Styles_Tab2 from '../../../../css/Styles.ViewTab2';
import TitleH1 from '../../../../components/TitleH1'

// Import Item
import ChartPie from "./ItemWallet";

const TabWallet = () => {

  const { theme } = useTheme();  
 
  return( 
    <SafeAreaView style={Styles_Tab2.container}>
      <ScrollView style={Styles_Tab2.scrollView}>
        {/****************************************/}
        <Text style={Styles_Tab2.subHeader}>Mi Billetera</Text>

        <View style={Styles_Tab2.vertical}>
          <TitleH1>
            TitleH1
          </TitleH1>
          <Divider orientation="vertical" />
          <Text>Right text</Text>
        </View>
        <View style={Styles_Tab2.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" width={5} />
          <Text>Right text</Text>
        </View>


        <ChartPie />

        <Text style={Styles_Tab2.subHeader}>Mi Saldo</Text>

        <View style={Styles_Tab2.horizontal}>
          <Text style={Styles_Tab2.horizontalText}>Horizontal Divider</Text>

          <TitleH1>
            TitleH1
          </TitleH1>
          <Divider />


          <Text style={Styles_Tab2.horizontalText}>
            Horizontal Divider with width and color
          </Text>


        </View>
        {/****************************************/}
        <Text style={Styles_Tab2.subHeader}>Horizontal Divider with Inset</Text>
        <View style={Styles_Tab2.horizontal}>
          <Text style={Styles_Tab2.horizontalText}>
            Horizontal Divider with left inset
          </Text>
          <Divider inset={true} />
          <Text style={Styles_Tab2.horizontalText}>
            Horizontal Divider with right inset
          </Text>
          <Divider inset={true} insetType="right" />
          <Text style={Styles_Tab2.horizontalText}>
            Horizontal Divider with middle inset
          </Text>
          <Divider inset={true} insetType="middle" />
          <Text style={Styles_Tab2.horizontalText}>Welcome to RNE App</Text>
        </View>

        {/****************************************/}
        <Text style={Styles_Tab2.subHeader}>Vertical Dividers</Text>
        <View style={Styles_Tab2.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" />
          <Text>Right text</Text>
        </View>
        <View style={Styles_Tab2.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" width={5} />
          <Text>Right text</Text>
        </View>
        {/****************************************/}
        <Text style={Styles_Tab2.subHeader}>Dividers with SubHeader</Text>
        <View style={Styles_Tab2.horizontal}>
          <Text style={Styles_Tab2.horizontalText}>Left text</Text>
          <Divider
            subHeader="Divider"
            inset={true}
            subHeaderStyle={{ color: theme?.colors?.primary }}
          />
          <Text style={Styles_Tab2.horizontalText}>Right text</Text>
        </View>
        {/****************************************/}
      </ScrollView>
    </SafeAreaView>
  )
}

export default TabWallet;