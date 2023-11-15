import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  /*
  const [fadeIn, setFadeIn] = useState(new Animated.Value(0));
  const [fadeInSlow, setFadeInSlow] = useState(new Animated.Value(0));

  React.useEffect(() => {

    Animated.timing(fadeIn,{
      toValue: 1,
      duration: 1000
    }).start();
    
    Animated.timing(fadeInSlow,{
      toValue: 1,
      duration: 2000
    }).start();
  }) */

  return (
    <Background>
      <Logo />
      <Header>DalePlay</Header>
      
      <Paragraph>
        Bienvenido
      </Paragraph>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Iniciar session
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarse
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('HelloWorldApp')}
      >
        HelloWorldApp
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});