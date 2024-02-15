import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Paragraph(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: "#000",
    marginVertical: 10
  },
})
