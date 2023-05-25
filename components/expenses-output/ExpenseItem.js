import { Pressable, StyleSheet, Text, View } from "react-native"

import { GlobalStyles } from "../../constants/styles"
import React from "react"
import { getFormattedDate } from "../../utils/formattedDate"
import { useNavigation } from "@react-navigation/native"

export default function ExpenseItem({ id, amount, title, date }) {
  const navigation = useNavigation()

  function expemseItemHandler() {
    navigation.navigate("ManageExpense", { id })
  }

  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.container, styles.pressedContainer]
          : [styles.container]
      }
      onPress={expemseItemHandler}
    >
      <View style={styles.innerContainer}>
        <View style={styles.textDetails}>
          <Text style={styles.title}>{title}</Text>
          <Text>{getFormattedDate(date)}</Text>
        </View>
        <View>
          <Text style={styles.amount}>${amount}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.grey10,
    marginBottom: 8,
    borderRadius: 8
  },
  pressedContainer: {
    backgroundColor: GlobalStyles.colors.grey100
  },
  innerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textDetails: {
    gap: 8
  },
  title: {
    fontSize: 18
  },
  amount: {
    fontWeight: "bold",
    fontSize: 20
  }
})
