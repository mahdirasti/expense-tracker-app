import { StyleSheet, Text, TextInput, View } from "react-native"

import { GlobalStyles } from "../../constants/styles"
import React from "react"

export default function Input({ label, inputConfig, error }) {
  let textInputStyles = [styles.textInput]
  if (inputConfig && inputConfig.multiline) {
    textInputStyles.push(styles.textInputMultiline)
  }

  if (error) {
    textInputStyles.push(styles.errorInput)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputHolder}>
        <TextInput style={textInputStyles} {...inputConfig} />
        {!!error && <Text style={styles.errorLabel}>{error}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8
  },
  label: {
    fontWeight: "bold",
    fontSize: 18
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.grey100,
    borderRadius: 8
  },
  textInputMultiline: {
    minHeight: 100
  },
  errorLabel: {
    color: GlobalStyles.colors.error500
  },
  errorInput: {
    backgroundColor: GlobalStyles.colors.error50
  },
  textInputHolder: {
    gap: 8
  }
})
