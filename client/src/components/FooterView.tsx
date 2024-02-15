import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Footer(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    margin: 10,padding: 5,borderRadius: 20,
    borderRadius: 5,
    fontSize: 10,
    lineHeight: 21,
    top:'auto',
    textAlign: 'center',
    marginBottom: 12,
    color: "#fff",
    marginVertical: 10
  },
})
