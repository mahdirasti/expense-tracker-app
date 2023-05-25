import React, { createContext } from "react"

const DUMMY_DATAS = [
  {
    id: "m1",
    title: "A pair of shoes",
    amount: 23.94,
    date: new Date("2023-1-08")
  },
  {
    id: "m2",
    title: "T Shirt",
    amount: 19,
    date: new Date("2023-05-09")
  },
  {
    id: "m3",
    title: "A Book",
    amount: 8.24,
    date: new Date("2023-05-10")
  },
  {
    id: "m4",
    title: "Laptop MacBookPro",
    amount: 2940,
    date: new Date("2023-05-11")
  },
  {
    id: "m5",
    title: "Iphone 13 Pro Max",
    amount: 1299,
    date: new Date("2023-05-11")
  }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: (item) => {},
  removeExpense: (id) => {},
  updateExpense: (id, item) => {}
})

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = React.useState(DUMMY_DATAS)

  const handleAddExpense = (item) => setExpenses((crt) => [...crt, item])
  const handleUpdateExpense = (id, item) => {
    setExpenses((crt) => {
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
    setExpenses((crt) => crt.filter((expense) => expense.id !== id))

  const value = {
    expenses,
    addExpense: handleAddExpense,
    removeExpense: handleRemoveExpense,
    updateExpense: handleUpdateExpense
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}
export default ExpenseProvider
