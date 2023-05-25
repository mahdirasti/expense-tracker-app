import React, { createContext } from "react"

const DUMMY_DATAS = []

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (item) => {},
  removeExpense: (id) => {},
  updateExpense: (id, item) => {},
  setExpenses: (items) => {}
})

const ExpenseProvider = ({ children }) => {
  const [items, setItems] = React.useState(DUMMY_DATAS)

  const handleAddExpense = (item) => setItems((crt) => [...crt, item])
  const handleUpdateExpense = (id, item) => {
    setItems((crt) => {
      let newExpenses = [...crt]
      const targetExpenseId = newExpenses.map((item) => item.id).indexOf(id)
      newExpenses[targetExpenseId] = {
        ...newExpenses[targetExpenseId],
        ...item
      }
      return newExpenses
    })
  }

  const handleRemoveExpense = (id) =>
    setItems((crt) => crt.filter((expense) => expense.id !== id))

  const handleSetExpenses = (items) => setItems(items)

  const value = {
    expenses: items,
    addExpense: handleAddExpense,
    removeExpense: handleRemoveExpense,
    updateExpense: handleUpdateExpense,
    setExpenses: handleSetExpenses
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}
export default ExpenseProvider
