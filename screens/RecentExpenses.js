import React, { useContext } from "react"

import { ExpensesContext } from "../store/context/expenses"
import ExpensesOutput from "../components/expenses-output/ExpensesOutput"
import { getMinusDays } from "../utils/getMinusDays"

export default function RecentExpensesScreen() {
  const { expenses } = useContext(ExpensesContext)

  const recentExpenses = expenses.filter((item) => {
    const today = new Date()
    return item.date > getMinusDays(today, 1)
  })

  return <ExpensesOutput expenses={recentExpenses} period={"Last 7 Days"} />
}
