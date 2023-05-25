import React, { useContext, useState } from "react"
import { StyleSheet, View } from "react-native"
import { deleteExpense, storeExpense, updateExpense } from "../utils/http"

import Button from "../components/ui/Button"
import { ExpensesContext } from "../store/context/expenses"
import { GlobalStyles } from "../constants/styles"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import ManageEpenseForm from "../components/manage-expense/ManageEpenseForm"
import { getFormattedDate } from "../utils/formattedDate"

export default function ManageExpenseScreen({ route, navigation }) {
  const [isFetching, setIsFetching] = useState()

  const {
    addExpense,
    updateExpense: contextUpdateExpense,
    removeExpense,
    expenses
  } = useContext(ExpensesContext)

  const hasExpenseId = !!route?.params?.id
  const expenseId = route?.params?.id

  const expense =
    (expenseId && expenses.filter((item) => item.id === expenseId)?.[0]) || null

  const deleteExpenseHandler = async () => {
    if (!expenseId) return

    setIsFetching(true)
    //Firebase
    await deleteExpense(expenseId)
    //Local
    removeExpense(expenseId)
    setIsFetching(false)
    navigation.goBack()
  }
  const cancelExpenseHandler = () => {
    navigation.goBack()
  }
  const confirmExpenseHandler = async (values) => {
    setIsFetching(true)
    if (hasExpenseId) {
      //Firebase update
      await updateExpense(expenseId, values)
      //Local update
      contextUpdateExpense(expenseId, values)
    } else {
      //Add to firebase
      const id = await storeExpense(values)
      //Local
      addExpense({
        id,
        ...values
      })
    }
    setIsFetching(false)
    navigation.goBack()
  }

  const expenseFormDefaultValues = {
    title: { value: expense?.title || "" } || "",
    amount: { value: expense?.amount || "" } || "",
    date: { value: expense?.date && getFormattedDate(expense?.date) } || ""
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ManageEpenseForm
        defaultValues={expenseFormDefaultValues}
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
