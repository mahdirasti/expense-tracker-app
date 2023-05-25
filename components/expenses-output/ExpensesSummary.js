import { StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../constants/styles"
import React from "react"

export default function ExpensesSummary({ expenses, period }) {
  const expensesTotal = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.amount}>${expensesTotal.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: GlobalStyles.colors.grey100
  },
  period: {
    fontSize: 20
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
