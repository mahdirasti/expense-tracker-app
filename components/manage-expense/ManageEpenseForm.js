import { StyleSheet, View } from "react-native"

import Button from "../ui/Button"
import { GlobalStyles } from "../../constants/styles"
import Input from "../ui/Input"
import React from "react"

export default function ManageEpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel
}) {
  const [inputValues, setInputValues] = React.useState({})

  function inputHandler(key, enteredValue) {
    setInputValues((crt) => ({ ...crt, [key]: enteredValue }))
  }

  function handleSubmit() {
    if (onSubmit) onSubmit(inputValues)
  }

  return (
    <View style={styles.container}>
      <Input
        label={"Amount"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "amount"),
          keyboardType: "decimal-pad",
          value: inputValues?.amount
        }}
      />
      <Input
        label={"Date"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "date"),
          keyboardType: "default",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          value: inputValues?.date
        }}
      />
      <Input
        label={"Title"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "title"),
          multiline: true,
          value: inputValues?.title
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button onPress={handleSubmit}>{submitButtonLabel}</Button>
        <Button onPress={onCancel} variant="outlined">
          Cancel
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8
  }
})
