import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated,
SafeAreaView, ScrollView, StatusBar} from "react-native";
//import LinearGradient from 'react-native-linear-gradient';

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import FadeInView from '../components/FadeInView'
import Footer from '../components/FooterView'

export default function StartScreen({ navigation }) {

  return (

    <Background>

      <FadeInView>
      <Logo />
      <Header>DalePlay</Header>
      
      <Paragraph>
        Bienvenido
      </Paragraph>
      
      </FadeInView>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Iniciar session
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarse
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Dashboard
      </Button>
      <Footer>
        ©2024 DalePay
      </Footer>
    </Background>
  )
}
