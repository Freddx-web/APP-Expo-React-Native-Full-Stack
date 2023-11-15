/**
 * 
 * https://reactnavigation.org/docs/tab-based-navigation/
 * 
 */

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DasboardScreen from '../component/TabNavigator/StageDasboard';
import SettingsScreen from '../component/TabNavigator/StageSettings';
import ProfileScreen from '../component/TabNavigator/StageProfile';

//========================================================//
// Construtore TimeOut - TimeOutcreateBottomTabNavigator
//========================================================//

// Head #1
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      
    </HomeStack.Navigator>
  );
}

// Head #2
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      
    </SettingsStack.Navigator>
  );
}

// Head #3
const GalleryStack = createNativeStackNavigator();

function GalleryStackScreen() {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen name="Gallery" component={ProfileScreen} />
      
    </GalleryStack.Navigator>
  );
}



//========================================================//
// Construtore TimeOut - TimeOutcreateBottomTabNavigator
//========================================================//
const Tab = createBottomTabNavigator();

export default function StageView() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="home" component={HomeStackScreen} />
        <Tab.Screen name="settings" component={SettingsStackScreen} />
        <Tab.Screen name="profile" component={GalleryStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

