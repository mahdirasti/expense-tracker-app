import React, { useContext } from "react"
import { StyleSheet, View } from "react-native"

import Button from "../components/ui/Button"
import { ExpensesContext } from "../store/context/expenses"
import { GlobalStyles } from "../constants/styles"
import ManageEpenseForm from "../components/manage-expense/ManageEpenseForm"

export default function ManageExpenseScreen({ route, navigation }) {
  const { addExpense, updateExpense, removeExpense, expenses } =
    useContext(ExpensesContext)

  const hasExpenseId = !!route?.params?.id
  const expenseId = route?.params?.id

  const expense =
    (expenseId && expenses.filter((item) => item.id === expenseId)?.[0]) || null

  const deleteExpenseHandler = () => {
    if (!expenseId) return

    removeExpense(expenseId)
    navigation.goBack()
  }
  const cancelExpenseHandler = () => {
    navigation.goBack()
  }
  const confirmExpenseHandler = (values) => {
    if (hasExpenseId) {
      updateExpense(expenseId, {
        ...values,
        date: new Date(values.date),
        amount: +values.amount
      })
    } else {
      addExpense({
        id: Math.floor(Math.random() * 100000) + new Date().toString(),
        ...values,
        date: new Date(values.date),
        amount: +values.amount
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ManageEpenseForm
        onCancel={cancelExpenseHandler}
        onSubmit={confirmExpenseHandler}
        submitButtonLabel={hasExpenseId ? "Confirm" : "Add"}
      />
      {hasExpenseId && (
        <View style={styles.buttonsContainer}>
          <Button
            variant="outlined"
            style={styles.trashButton}
            styleText={styles.trashButtonText}
            onPress={deleteExpenseHandler}
          >
            Trash
          </Button>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    gap: 16
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 16,
    marginTop: 0,
    borderTopWidth: 1,
    borderTopColor: GlobalStyles.colors.grey100,
    width: "100%"
  },
  trashButton: {
    borderColor: "red"
  },
  trashButtonText: {
    color: "red"
  }
})
