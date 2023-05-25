export function getFormattedDate(date) {
  if (!date) return

  let finalDate = date
  if (typeof finalDate === "string") {
    finalDate = new Date(finalDate)
  }

  return `${finalDate.getFullYear()}-${
    finalDate.getMonth() + 1
  }-${finalDate.getDate()}`
}
