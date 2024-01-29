import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    
    <LinearGradient
      // Background Linear Gradient 1
      // colors={['#fff','#fff','#fff','#fff','#00ff6887', '#2196f3']} 
      colors={['#040a23', '#191b27', '#191b27', '#2b323b', '#3c586d', '#05af4a91']} 
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          {children}  
      </KeyboardAvoidingView>
    </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})