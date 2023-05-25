import React, { useContext, useEffect, useState } from "react"

import { ExpensesContext } from "../store/context/expenses"
import ExpensesOutput from "../components/expenses-output/ExpensesOutput"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { fetchExpenses } from "../utils/http"
import { getMinusDays } from "../utils/getMinusDays"

export default function RecentExpensesScreen() {
  const [isFetching, setIsFetching] = useState(false)

  const { expenses, setExpenses } = useContext(ExpensesContext)

  useEffect(() => {
    setIsFetching(true)
    async function getData() {
      const data = await fetchExpenses()
      setExpenses(data)
      setIsFetching(false)
    }
    getData()

    return () => {
      setExpenses([])
    }
  }, [])

  const recentExpenses = expenses.filter((item) => {
    const today = new Date()
    return new Date(item.date) > getMinusDays(today, 1)
  })

  if (isFetching) {
    return <LoadingOverlay />
  }

  return <ExpensesOutput expenses={recentExpenses} period={"Last 7 Days"} />
}
