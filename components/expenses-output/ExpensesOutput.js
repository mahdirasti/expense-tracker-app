import { StyleSheet, Text, View } from "react-native"

import ExpensesList from "./ExpensesList"
import ExpensesSummary from "./ExpensesSummary"
import React from "react"

export default function ExpensesOutput({
  expenses,
  period,
  fallBackText = "There is no expenses to see!"
}) {
  const renderList = () => {
    if (expenses.length === 0) {
      return (
        <View style={styles.fallBackContainer}>
          <Text style={styles.fallBackText}>{fallBackText}</Text>
        </View>
      )
    }

    return <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} period={period} />
      {renderList()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8
  },
  fallBackContainer: {
    padding: 8,
    alignItems: "center"
  },
  fallBackText: {
    fontSize: 16
  }
})
