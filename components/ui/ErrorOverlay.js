import { StyleSheet, Text, View } from "react-native"

import Button from "../ui/Button"
import { GlobalStyles } from "../../constants/styles"
import React from "react"

export default function ErrorOverlay({ onConfirm, message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>An error occured!</Text>
      <Button onPress={onConfirm}>{message}</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 24
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14
  }
})
