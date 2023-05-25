import axios from "axios"

const BACKEND_URL =
  "https://react-native-sample-bef13-default-rtdb.firebaseio.com"

export async function storeExpense(expenseData) {
  const res = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData)
  const id = res.data.name
  return id
}

export async function fetchExpenses() {
  try {
    const res = await axios.get(`${BACKEND_URL}/expenses.json`)
    const expenses = []
    for (let key in res.data) {
      const resExpense = res.data[key]
      expenses.push({
        id: key,
        ...resExpense,
        date: resExpense.date.slice(0, 10)
      })
    }
    return expenses
  } catch (e) {
    console.error(e)
    return []
  }
}

export async function updateExpense(id, expenseData) {
  await axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData)
}

export async function deleteExpense(id) {
  await axios.delete(`${BACKEND_URL}/expenses/${id}.json`)
}
