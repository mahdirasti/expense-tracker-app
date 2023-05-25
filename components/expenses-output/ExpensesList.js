import { FlatList, StyleSheet } from "react-native"

import ExpenseItem from "./ExpenseItem"
import React from "react"

function renderExpenseItem({ item }) {
  return <ExpenseItem {...item} />
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  }
})
