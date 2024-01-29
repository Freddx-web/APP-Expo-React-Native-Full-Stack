import React, {useRef, useState, useEffect} from 'react';
import { View, Text,
    StyleSheet, ActivityIndicator, SafeAreaView, Animated } from 'react-native';

const LoadingView = () => {
  
  // Style
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
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
  });

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.loadingtext}>
        <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
        {"\n"}
        {"\n"}
          Cargando
      </Text>       
      <Animated.View>
        <Text> By DalePlay</Text>
      </Animated.View>
    </SafeAreaView>  
  )
}

export default LoadingView ;