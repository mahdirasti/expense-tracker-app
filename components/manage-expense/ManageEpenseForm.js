import { Alert, StyleSheet, View } from "react-native"

import Button from "../ui/Button"
import Input from "../ui/Input"
import React from "react"

export default function ManageEpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues
}) {
  const [inputs, setInputs] = React.useState({
    amount: { value: defaultValues.amount.value, isValid: true },
    date: { value: defaultValues.date.value, isValid: true },
    title: { value: defaultValues.title.value, isValid: true }
  })

  function inputHandler(key, enteredValue) {
    setInputs((crt) => ({
      ...crt,
      [key]: { value: enteredValue, isValid: true }
    }))
  }

  function handleSubmit() {
    const expenseData = {
      amount: +inputs?.amount?.value,
      date: new Date(inputs.date.value),
      title: inputs.title.value
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== "Invalid Date"
    const titleIsValid = expenseData.title.trim().length !== 0

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      setInputs((crt) => ({
        title: { value: crt.title.value, isValid: titleIsValid },
        amount: { value: crt.amount.value, isValid: amountIsValid },
        date: { value: crt.date.value, isValid: dateIsValid }
      }))

      return
    }

    if (onSubmit) onSubmit(expenseData)
  }

  return (
    <View style={styles.container}>
      <Input
        label={"Amount"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "amount"),
          keyboardType: "decimal-pad",
          value: "" + inputs?.amount?.value
        }}
        error={!inputs.amount.isValid && "Amount is invalid!"}
      />
      <Input
        label={"Date"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "date"),
          keyboardType: "default",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          value: inputs?.date?.value
        }}
        error={!inputs.date.isValid && "Date is invalid!"}
      />
      <Input
        label={"Title"}
        inputConfig={{
          onChangeText: inputHandler.bind(this, "title"),
          multiline: true,
          value: inputs?.title?.value
        }}
        error={!inputs.title.isValid && "Title is invalid!"}
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
