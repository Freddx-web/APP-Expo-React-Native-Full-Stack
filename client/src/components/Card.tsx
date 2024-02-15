import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function CardView(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  horizontal: {
    flex: 1,paddingVertical:100,
    backgroundColor: '#fff',borderRadius: 5,marginBottom: 10,
  },
  text: {
    fontSize: 19,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: "#000"
  },
})
