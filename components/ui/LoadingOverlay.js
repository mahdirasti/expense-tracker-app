import { ActivityIndicator, StyleSheet, View } from "react-native"

import { GlobalStyles } from "../../constants/styles"
import React from "react"

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary500
  }
})
