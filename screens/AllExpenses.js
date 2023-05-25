import React, { useContext, useEffect, useState } from "react"

import ErrorOverlay from "../components/ui/ErrorOverlay"
import { ExpensesContext } from "../store/context/expenses"
import ExpensesOutput from "../components/expenses-output/ExpensesOutput"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { fetchExpenses } from "../utils/http"

export default function AllExpensesScreen() {
  const [error, setError] = useState(null)
  const errorHandler = () => setError(null)

  const [isFetching, setIsFetching] = useState(false)

  const expenseContext = useContext(ExpensesContext)

  useEffect(() => {
    async function getData() {
      setIsFetching(true)
      try {
        const data = await fetchExpenses()
        expenseContext.setExpenses(data)
      } catch (error) {
        setError("Could not fetch expenses!")
      } finally {
        setIsFetching(false)
      }
    }

    getData()

    return () => {
      expenseContext.setExpenses([])
    }
  }, [])

  if (isFetching) {
    return <LoadingOverlay />
  }

  if (error && !isFetching) {
    return <ErrorOverlay onConfirm={errorHandler} message={error} />
  }

  return <ExpensesOutput expenses={expenseContext.expenses} period={"Total"} />
}
