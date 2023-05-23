import AllExpensesScreen from "./screens/AllExpenses"
import ManageExpenseScreen from "./screens/ManageExpense"
import { NavigationContainer } from "@react-navigation/native"
import RecentExpensesScreen from "./screens/RecentExpenses"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="AllExpenses" component={AllExpensesScreen} />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OverviewExpenses" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
