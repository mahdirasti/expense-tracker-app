import React, { useContext } from "react"

import { ExpensesContext } from "../store/context/expenses"
import ExpensesOutput from "../components/expenses-output/ExpensesOutput"

export default function AllExpensesScreen() {
  const { expenses } = useContext(ExpensesContext)

  return <ExpensesOutput expenses={expenses} period={"Total"} />
}
